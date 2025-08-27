import { inject, Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalizationEnum } from "@new-rasel/core";

@Injectable({
  providedIn: "root"
})
export class TranslationService {

  private translate = inject(TranslateService);

  chnageLanguage(lang: LocalizationEnum): void {
    this.translate.use(lang);
  }

  getCurrentLang(): LocalizationEnum {
    return this.translate.getCurrentLang() as LocalizationEnum;
  }

}
