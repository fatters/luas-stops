import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { getNativeElement } from '../../../test.helpers';

describe('FooterComponent', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let testSubject: FooterComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ]
    });

    fixture = TestBed.createComponent(FooterComponent);
    testSubject = fixture.componentInstance;
  }));

  describe('render', () => {

    it('creates the footer', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.luas-footer')).toBeTruthy();
    });

    it('should have non-affiliation text present', () => {
      // Given
      const someText = 'This site is not affiliated with the Luas, TFI or Transdev in any way whatsoever.';

      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.luas-footer p').innerText).toEqual(someText);
    });
  });
});
