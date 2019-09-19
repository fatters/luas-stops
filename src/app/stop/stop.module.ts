import { NgModule } from '@angular/core';
import { StopComponent } from './stop.component';
import { RouterModule, Routes } from '@angular/router';
import { StopResolver } from './stop.resolver';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: StopComponent, resolve: { stop: StopResolver } }
];

@NgModule({
  declarations: [
    StopComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    StopResolver
  ],
  exports: [
    StopComponent
  ]
})
export class StopModule {
}
