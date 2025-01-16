import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: MessagesComponent,
        children: [
            {
                path: 'direct',
                loadChildren: () => import('../direct-messages/direct-messages.module').then(m => m.DirectMessagesModule),
            },
            {
                path: 'group',
                loadChildren: () => import('../group-messages/group-messages.module').then(m => m.GroupMessagesModule),
            }
        ]
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagesModule { }
