import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectMessagesComponent } from './direct-messages.component';

const routes: Routes = [
    {
        path: '',
        component: DirectMessagesComponent,
        children: [
            {
                path: 'direct-media',
                outlet: 'directPopup',
                loadChildren: () => import('../media-popup/media-popup.module').then(m => m.MediaPopupModule)
            },
            {
                path: 'direct-folder',
                outlet: 'directPopup',
                loadChildren: () => import('../folder-popup/folder-popup.module').then(m => m.FolderPopupModule)
            }
        ]
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DirectMessagesModule { }
