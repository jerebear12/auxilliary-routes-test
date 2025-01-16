import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/app', pathMatch: 'full' },
            {
                path: 'app',
                loadChildren: () => import('./main-app/main-app.module').then(m => m.MainAppModule)
            }
        ]
    }
];
