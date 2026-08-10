import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(public i18n: LanguageService) {}

  get experienceYears(): number {
    const today = new Date();
    const startYear = 2018;
    const anniversaryMonth = 11; // December (zero-based)
    const anniversaryDay = 1;
    let years = today.getFullYear() - startYear;

    const anniversaryReached =
      today.getMonth() > anniversaryMonth ||
      (today.getMonth() === anniversaryMonth && today.getDate() >= anniversaryDay);

    if (!anniversaryReached) {
      years -= 1;
    }

    return years;
  }

  get heroDescription(): string {
    return this.i18n.lang === 'es'
      ? `Soy Omar Arvelo, desarrollador Java Full-Stack con ${this.experienceYears} años de experiencia. Transformo problemas complejos en experiencias web claras, rápidas y confiables.`
      : `I'm Omar Arvelo, a Java Full-Stack developer with ${this.experienceYears} years of experience. I turn complex problems into clear, fast and reliable web experiences.`;
  }
}
