import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stop } from './model/stop';
import { Direction, Tram } from './model/tram';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from '../app.service';
import { take } from 'rxjs/operators';
import { DistanceService } from '../common/distance/distance.service';
import { Page } from '../common/page/page';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StopComponent implements OnInit, Page {
  stop: Stop;
  distance = '';

  constructor(private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private appService: AppService,
              private distanceService: DistanceService,
              private title: Title,
              private meta: Meta,
              @Inject(PLATFORM_ID) private platformId: string) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.stop = data.stop;
      this.buildSeoHeadTags();
      this.calculateDistanceFromDeviceLocation();
      this.getTramBoard();

      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo(0, 0);
      }
    });
  }

  buildSeoHeadTags(): void {
    this.title.setTitle(`${this.stop.name} | Luas Stops`);
    this.meta.updateTag({
      name: 'description',
      content: `Information about the ${this.stop.name} Luas stop.`
    });
  }

  get parkAndRide(): string {
    return this.stop.isParkandRide
      ? 'This stop is a park and ride stop.'
      : '';
  }

  get cycleRide(): string {
    return this.stop.isCycleRide
      ? 'This stop is a cycle ride stop.'
      : '';
  }

  get inbound(): Tram[] {
    return this.stop.getTramsByDirection(Direction.INBOUND);
  }

  get outbound(): Tram[] {
    return this.stop.getTramsByDirection(Direction.OUTBOUND);
  }

  private getTramBoard(): void {
    this.appService.getTramBoardForStop(this.stop.id).pipe(take(1)).subscribe((trams) => {
      this.stop.trams = trams;
      this.cd.markForCheck();
    });
  }

  private calculateDistanceFromDeviceLocation(): void {

    if ('geolocation' in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
        this.distance = this.distanceService.getDistanceFromLatLongInKm(
          position.coords.latitude,
          position.coords.longitude,
          parseFloat(this.stop.lat.toString()),
          parseFloat(this.stop.long.toString())
        ).toString();
        this.cd.markForCheck();
      });
    } else {
      this.distance = 'Please allow device location detection for this feature to work.';
    }
  }
}
