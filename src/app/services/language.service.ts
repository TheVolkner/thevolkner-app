import { Injectable } from '@angular/core';

export type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang: Language = 'es';

  constructor() {
    const saved = localStorage.getItem('thevolkner-language');
    this.lang = saved === 'en' ? 'en' : 'es';
    document.documentElement.lang = this.lang;
  }

  setLanguage(language: Language): void {
    this.lang = language;
    localStorage.setItem('thevolkner-language', language);
    document.documentElement.lang = language;
  }

  toggle(): void {
    this.setLanguage(this.lang === 'es' ? 'en' : 'es');
  }

  text(es: string, en: string): string {
    return this.lang === 'es' ? es : en;
  }
}
