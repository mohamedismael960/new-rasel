import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'layout',
    loadChildren: () => import('layout/Routes').then((m) => m!.remoteRoutes),
  }
];
