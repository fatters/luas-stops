import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Stop } from './model/stop';
import { STOPS } from '../../data/stops';

export enum LineType {
  Red,
  Green
}

@Injectable()
export class StopResolver implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot): Stop {
    const stopId = route.params['stopId'];

    const result = STOPS.stops.filter((stop) => {
      return stop.id === stopId.toUpperCase();
    });

    if (result[0]) {
      const data = result[0];
      return new Stop(
        data.id,
        data.name,
        this.getLine(data.line),
        data.isParkandRide,
        data.isCycleRide,
        data.lat,
        data.long,
        []
      );
    } else {
      // TODO: redirect to home
    }
  }

  private getLine(lineAsString: string): LineType {
    switch (lineAsString) {
      case 'red':
        return LineType.Red;
      case 'green':
        return LineType.Green;
    }
  }
}
