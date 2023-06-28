import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./PAGES/home/home.page').then( m => m.HOMEPage)
  },
  {
    path: 'add-item',
    loadComponent: () => import('./PAGES/add-item/add-item.page').then( m => m.AddItemPage)
  },
];
