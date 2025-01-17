import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/app', pathMatch: 'full' },
            {
                path: 'app',
                loadComponent: () => import('./main-app/main-app.component').then(m => m.MainAppComponent),
                children: [
                    {
                        path: 'home',
                        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
                    },
                    {
                        path: 'messages',
                        loadComponent: () => import('./messages/messages.component').then(m => m.MessagesComponent),
                        children: [
                            {
                                path: 'direct',
                                loadComponent: () => import('./direct-messages/direct-messages.component').then(m => m.DirectMessagesComponent),
                            },
                            {
                                path: 'group',
                                loadComponent: () => import('./group-messages/group-messages.component').then(m => m.GroupMessagesComponent),
                            }
                        ]
                    }
                ]
            },
            {
                path: 'media',
                outlet: 'popup',
                loadComponent: () => import('./media-popup/media-popup.component').then(m => m.MediaPopupComponent)
            },
            {
                path: 'folder',
                outlet: 'popup',
                loadComponent: () => import('./folder-popup/folder-popup.component').then(m => m.FolderPopupComponent)
            },
            {
                path: '**',
                redirectTo: '/app'
            }
        ]
    }
];
