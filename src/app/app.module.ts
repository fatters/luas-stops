import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './common/header/header.module';
import { FooterModule } from './common/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'luas-stops'}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
