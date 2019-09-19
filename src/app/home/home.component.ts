import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from '../app.service';
import { LineType } from '../stop/stop.resolver';
import { Page } from '../common/page/page';
import { Meta, Title } from '@angular/platform-browser';
import { STOPS } from '../../data/stops';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, Page {
  stops$: Observable<any>;
  redLineStatus$: Observable<string>;
  greenLineStatus$: Observable<string>;
  filtered: string;

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              private appService: AppService,
              private title: Title,
              private meta: Meta) {
  }

  ngOnInit(): void {
    this.stops$ = of(STOPS.stops);
    this.buildSeoHeadTags();
    this.redLineStatus$ = this.appService.getLineStatus(LineType.Red);
    this.greenLineStatus$ = this.appService.getLineStatus(LineType.Green);

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  buildSeoHeadTags(): void {
    this.title.setTitle('Home | Luas Stops');
    this.meta.updateTag({
      name: 'description',
      content: 'A list of all Luas stops in Dublin with live arrival and departure times and distance of a stop from your device.'
    });
  }
}
