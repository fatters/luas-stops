import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Direction, Tram } from './stop/model/tram';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LineType } from './stop/stop.resolver';
import { isPlatformBrowser } from '@angular/common';
import { STOPS } from '../data/stops';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId: string) {
  }

  getLineStatus(lineType: LineType): Observable<string> {
    const url = STOPS.api.replace('{stopId}', lineType === LineType.Red ? 'TPT' : 'BRO');

    return this.http.get(url, {responseType: 'text'}).pipe(map((xml) => {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(xml.toString(), 'text/xml');
      const lineStatus = doc.getElementsByTagName('message')[0];
      return lineStatus.innerHTML;
    }));
  }

  getTramBoardForStop(stopId: string): Observable<Tram[]> {
    const url = STOPS.api.replace('{stopId}', stopId);

    return this.http.get(url, {responseType: 'text'}).pipe(
      take(1),
      map((xml: any) => {
        if (isPlatformBrowser(this.platformId)) {
          const domParser = new DOMParser();
          const doc = domParser.parseFromString(xml.toString(), 'text/xml');
          const tramInfo: Tram[] = [];

          tramInfo.push(...this.getTramsFromDirection(doc.getElementsByTagName('direction')[0]));
          tramInfo.push(...this.getTramsFromDirection(doc.getElementsByTagName('direction')[1]));

          return tramInfo;
        } else {
          return [];
        }
      })
    );
  }

  private getTramsFromDirection(element: Element): Tram[] {
    const trams: Tram[] = [];
    const direction = this.getDirection(element.getAttribute('name'));

    for (let i = 0; i < element.children.length; i++) {
      trams.push(new Tram(
        direction,
        element.children[i].getAttribute('dueMins'),
        element.children[i].getAttribute('destination')
      ));
    }
    return trams;
  }

  private getDirection(string: string): Direction {
    return string === 'Inbound'
      ? Direction.INBOUND
      : Direction.OUTBOUND;
  }
}
