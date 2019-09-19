import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './common/header/header.module';
import { FooterModule } from './common/footer/footer.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let testSubject: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderModule,
        FooterModule
      ],
      declarations: [
        AppComponent
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    testSubject = fixture.componentInstance;
  }));

  it('should create the app', () => {
    // Then
    expect(testSubject).toBeTruthy();
  });
});
