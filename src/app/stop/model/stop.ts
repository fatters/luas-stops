import { Direction, Tram } from './tram';
import { LineType } from '../stop.resolver';

export class Stop {

  constructor(public id: string,
              public name: string,
              public line: LineType,
              public isParkandRide: boolean,
              public isCycleRide: boolean,
              public lat: number | string,
              public long: number | string,
              public trams: Tram[] = []) {
  }

  getTramsByDirection(direction: Direction): Tram[] {
    return this.trams.filter((tram) => tram.direction === direction);
  }
}
