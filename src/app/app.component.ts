import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private service: TranslocoService) {}
  changeLang(event: { target: { value: string } }): void {
    const lang = event.target.value;
    this.service.setActiveLang(lang.toLowerCase());
  }
}
