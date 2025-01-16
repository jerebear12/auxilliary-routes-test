import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FolderPopupComponent } from './folder-popup.component';

const routes: Routes = [
    {
        path: '',
        component: FolderPopupComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FolderPopupModule { }
