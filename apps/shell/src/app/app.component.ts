import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToasterService } from '@new-rasel/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [RouterModule , TranslateModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'shell';

  ToastrService = inject(ToasterService);

  constructor() {
    this.ToastrService.success({ title: 'Success', message: 'This is success message' });
    this.ToastrService.error({ title: 'Error', message: 'This is error message' });
    this.ToastrService.warning({ title: 'Warning', message: 'This is warning message' });
    this.ToastrService.info({ title: 'Info', message: 'This is info message' });
  }
}
