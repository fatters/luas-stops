import { DistanceService } from './distance.service';
import { async } from '@angular/core/testing';

describe('DistanceService', () => {
  let testSubject: DistanceService;

  beforeEach(async(() => {
    testSubject = new DistanceService();
  }));

  describe('#getDistanceFromLatLongInKm()', () => {

    it('returns distance in km', () => {
      // Given
      const expectedDistance = 157.24938127194397;

      // When
      const result = testSubject.getDistanceFromLatLongInKm(0, 0, 1, 1);

      // Then
      expect(result).toEqual(expectedDistance);
    });
  });

  describe('#degressToRadius()', () => {

    it('returns given degrees multiplied by (PI divided by 180)', () => {
      // Given
      const someDegress = 100;

      // When
      const result = testSubject.degreesToRadius(someDegress);

      // Then
      expect(result).toEqual(someDegress * (Math.PI / 180));
    });
  });
});
