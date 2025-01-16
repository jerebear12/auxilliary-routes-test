import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MediaPopupComponent } from './media-popup.component';

const routes: Routes = [
    {
        path: '',
        component: MediaPopupComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MediaPopupModule { }
