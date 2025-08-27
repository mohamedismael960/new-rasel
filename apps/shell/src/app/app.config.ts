import { ApplicationConfig, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { CORE_CONFIG, ErrorHandlerService, GlobalHttpErrorInterceptor, HttpBaseInterceptor, TOASTER_SERVICE } from '@corp-products/app-core';
import { HTTP_INTERCEPTORS, HttpBackend, provideHttpClient } from '@angular/common/http';
import { MissingTranslationHandler, provideTranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideToastr } from 'ngx-toastr';
import { ToasterService } from '@new-rasel/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),

    provideHttpClient(),

    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json'
      }),
      fallbackLang: 'en',
      lang: 'en'
    }),

    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),

    //start core liberary providers
    {
      provide: CORE_CONFIG,
      useValue: {
        apiPrefix: '',
        gatewayUrl: '',
      },
    },
    {
      provide: TOASTER_SERVICE,
      useClass: ToasterService,
    },
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
