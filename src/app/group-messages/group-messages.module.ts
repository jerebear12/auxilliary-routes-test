import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroupMessagesComponent } from './group-messages.component';

const routes: Routes = [
    {
        path: '',
        component: GroupMessagesComponent,
        children: [
            {
                path: 'group-media',
                outlet: 'groupPopup',
                loadChildren: () => import('../media-popup/media-popup.module').then(m => m.MediaPopupModule)
            },
            {
                path: 'group-folder',
                outlet: 'groupPopup',
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
export class GroupMessagesModule { }
