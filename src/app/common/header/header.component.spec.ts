import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { getNativeElement } from '../../../test-helpers';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let testSubject: HeaderComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
      imports: [
        RouterTestingModule
      ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    testSubject = fixture.componentInstance;
  }));

  describe('render', () => {

    it('creates the footer', () => {
      // When
      fixture.detectChanges();

      // Then
      expect(getNativeElement(fixture, '.luas-header')).toBeTruthy();
    });
  });

  describe('#menuState()', () => {

    it('returns "Close" if mobileMenuOpened is true', () => {
      // Given
      testSubject.mobileMenuOpened = true;

      // When
      const result = testSubject.menuState;

      // Then
      expect(result).toEqual('Close');
    });

    it('returns "Open" if mobileMenuOpened is false', () => {
      // Given
      testSubject.mobileMenuOpened = false;

      // When
      const result = testSubject.menuState;

      // Then
      expect(result).toEqual('Open');
    });
  });

  describe('#navToggle()', () => {

    it('makes mobileMenuOpened true if it is false', () => {
      // Given
      testSubject.mobileMenuOpened = false;

      // When
      testSubject.navToggle();

      // Then
      expect(testSubject.mobileMenuOpened).toEqual(true);
    });

    it('makes mobileMenuOpened false if it is true', () => {
      // Given
      testSubject.mobileMenuOpened = true;

      // When
      testSubject.navToggle();

      // Then
      expect(testSubject.mobileMenuOpened).toEqual(false);
    });
  });

  describe('#navClose()', () => {

    it('sets mobileMenuOpened to false', () => {
      // Given
      testSubject.mobileMenuOpened = true;

      // When
      testSubject.navClose();

      // Then
      expect(testSubject.mobileMenuOpened).toEqual(false);
    });
  });
});
