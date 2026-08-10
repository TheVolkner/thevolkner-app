import { Component } from '@angular/core';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  constructor(public i18n: LanguageService) {}

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
