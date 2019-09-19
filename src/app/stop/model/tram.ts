export enum Direction {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound'
}

export class Tram {

  constructor(public direction: Direction,
              public due: string,
              public destination: string) {

  }
}
