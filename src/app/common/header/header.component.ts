import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  mobileMenuOpened = false;

  get menuState(): string {
    return this.mobileMenuOpened
      ? 'Close'
      : 'Open';
  }

  navToggle(): void {
    this.mobileMenuOpened = !this.mobileMenuOpened;
  }

  navClose(): void {
    this.mobileMenuOpened = false;
  }
}
