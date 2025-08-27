import { inject, Injectable } from '@angular/core';
import { ToasterInterface, ToasterOptions } from '@corp-products/app-core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService implements ToasterInterface {
  private toastr = inject(ToastrService);

  success(options : ToasterOptions): void {
    this.toastr.success(options.message, options.title);
  }

  error(options : ToasterOptions): void {
    this.toastr.error(options.message, options.title);
  }

  warning(options : ToasterOptions): void {
    this.toastr.warning(options.message, options.title);
  }

  info(options : ToasterOptions): void {
    this.toastr.info(options.message, options.title);
  }
}
