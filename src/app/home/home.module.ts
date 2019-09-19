import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FilterItemPipe } from '../common/filter-item/filter-item.pipe';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    HomeComponent,
    FilterItemPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
