import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CORE_CONFIG, ErrorHandlerService, GlobalHttpErrorInterceptor, HttpBaseInterceptor, TOASTER_SERVICE } from '@corp-products/app-core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),



    //start core liberary providers
    {
      provide: CORE_CONFIG,
      useValue: {
        apiPrefix : '',
        gatewayUrl: '' ,
      },
    },
    // {
    //   provide: TOASTER_SERVICE,
    //   useClass: ToasterService,
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpBaseInterceptor,
      multi: true,
    },
     {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorInterceptor,
      multi: true
    },
     //end core liberary providers
  ],
};
