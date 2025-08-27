import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CORE_CONFIG, ErrorHandlerService, GlobalHttpErrorInterceptor, HttpBaseInterceptor, TOASTER_SERVICE } from '@corp-products/app-core';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { provideLocalizationLoader } from '@new-rasel/localization';
import { provideTranslateService } from '@ngx-translate/core';
import { LocalizationEnum } from '@new-rasel/core';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),

    provideHttpClient(),
    provideTranslateService({
      lang: LocalizationEnum.EN,
      fallbackLang: LocalizationEnum.EN,
      loader: provideLocalizationLoader()
    }),

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
