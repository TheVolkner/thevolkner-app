import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(public i18n: LanguageService) {}

  groups = [
    {
      icon: 'fa-solid fa-server', titleEs: 'Back-end', titleEn: 'Back-end',
      descriptionEs: 'Servicios robustos, seguros y preparados para crecer.',
      descriptionEn: 'Robust, secure services built to scale.',
      skills: [
        { name: 'Java', icon: 'fa-brands fa-java' },
        { name: 'Spring', icon: 'fa-solid fa-leaf' },
        { name: 'Python', icon: 'fa-brands fa-python' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'C', icon: 'fa-solid fa-c' },
        { name: 'C++', icon: 'fa-solid fa-code' },
        { name: 'JWT', icon: 'fa-solid fa-key' },
        { name: 'Keycloak', icon: 'fa-solid fa-shield-halved' }
      ]
    },
    {
      icon: 'fa-solid fa-layer-group', titleEs: 'Front-end', titleEn: 'Front-end',
      descriptionEs: 'Interfaces accesibles, fluidas y fáciles de mantener.',
      descriptionEn: 'Accessible, fluid interfaces that are easy to maintain.',
      skills: [
        { name: 'Angular', icon: 'fa-brands fa-angular' },
        { name: 'TypeScript', icon: 'fa-solid fa-code' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'HTML', icon: 'fa-brands fa-html5' },
        { name: 'CSS / Sass', icon: 'fa-brands fa-sass' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' }
      ]
    },
    {
      icon: 'fa-solid fa-database', titleEs: 'Bases de datos', titleEn: 'Databases',
      descriptionEs: 'Persistencia relacional y documental para distintos tipos de producto.',
      descriptionEn: 'Relational and document persistence for different product needs.',
      skills: [
        { name: 'Oracle', icon: 'fa-solid fa-database' },
        { name: 'MySQL', icon: 'fa-solid fa-database' },
        { name: 'PostgreSQL', icon: 'fa-solid fa-database' },
        { name: 'Firebase', icon: 'fa-solid fa-fire-flame-curved' },
        { name: 'MongoDB', icon: 'fa-solid fa-leaf' }
      ]
    },
    {
      icon: 'fa-solid fa-screwdriver-wrench', titleEs: 'Herramientas', titleEn: 'Tooling',
      descriptionEs: 'Infraestructura, automatización e IA para entregar mejor software.',
      descriptionEn: 'Infrastructure, automation and AI for better software delivery.',
      skills: [
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
        { name: 'Docker', icon: 'fa-brands fa-docker' },
        { name: 'Kubernetes', icon: 'fa-solid fa-dharmachakra' },
        { name: 'WebLogic', icon: 'fa-solid fa-network-wired' },
        { name: 'Postman', icon: 'fa-solid fa-paper-plane' },
        { name: 'SoapUI', icon: 'fa-solid fa-vial-circle-check' },
        { name: 'Codex', icon: 'fa-solid fa-terminal' },
        { name: 'Antigravity', icon: 'fa-solid fa-wand-magic-sparkles' }
      ]
    }
  ];
}
