import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('layout/Routes').then((m) => m!.remoteRoutes),
  }
];
