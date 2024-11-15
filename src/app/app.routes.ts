import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
        import('./home/home.page').then((m) => m.HomePage),
  }, {
    path: 'display',
    loadComponent: () =>
        import('./display/display.page').then(m => m.DisplayPage)
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
