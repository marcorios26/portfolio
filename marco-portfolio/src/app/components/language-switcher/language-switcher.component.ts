import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div class="lang-switch mono">
      <button type="button" [class.is-active]="translate.currentLang === 'es'" (click)="use('es')">ES</button>
      <span>/</span>
      <button type="button" [class.is-active]="translate.currentLang === 'en'" (click)="use('en')">EN</button>
    </div>
  `
})
export class LanguageSwitcherComponent {
  readonly translate = inject(TranslateService);

  use(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}