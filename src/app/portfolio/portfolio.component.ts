import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

interface ProjectLink { labelEs: string; labelEn: string; url: string; icon: string; }
interface Project {
  title: string;
  categoryEs: string;
  categoryEn: string;
  descriptionEs: string;
  descriptionEn: string;
  technologies: string[];
  image?: string;
  video?: string;
  featured?: boolean;
  links: ProjectLink[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(public i18n: LanguageService) {}

  projects: Project[] = [
    {
      title: 'DondeAyudoVenezuela', categoryEs: 'Plataforma cívica', categoryEn: 'Civic platform', featured: true,
      descriptionEs: 'Aplicación web desarrollada con Spring Boot y Angular para centralizar información relevante sobre edificios afectados, sismos registrados por la USGS, centros de acopio y refugios. Sirvió como web interactiva para gestionar apoyo y recursos durante la urgencia nacional producto del doblete sísmico de junio de 2026 en Venezuela.',
      descriptionEn: 'A Spring Boot and Angular web app that centralized relevant information about affected buildings, USGS-recorded earthquakes, collection centers and shelters. It served as an interactive platform for coordinating support and resources during the national emergency caused by the June 2026 double earthquake in Venezuela.',
      technologies: ['Angular', 'Spring Boot', 'USGS API', 'Leaflet'],
      image: 'assets/donde-ayudo-venezuela.png',
      video: 'assets/donde-ayudo-venezuela-demo.mp4',
      links: []
    },
    {
      title: 'Sistema de Exámenes', categoryEs: 'Full-Stack', categoryEn: 'Full-Stack',
      descriptionEs: 'Plataforma segura para crear, administrar y presentar evaluaciones en línea.',
      descriptionEn: 'A secure platform to create, manage and take online assessments.',
      technologies: ['Angular', 'Spring Security', 'JWT', 'MySQL', 'Docker'], image: 'assets/sistemaexamenes.png',
      links: [
        { labelEs: 'Visitar', labelEn: 'Visit', url: 'https://sistema-examenes.vercel.app/login', icon: 'fa-arrow-up-right-from-square' },
        { labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/sistema-examenes', icon: 'fa-code-branch' }
      ]
    },
    {
      title: 'Panther Search Engine', categoryEs: 'Full-Stack', categoryEn: 'Full-Stack',
      descriptionEs: 'Motor de búsqueda web construido con arquitectura separada y persistencia propia.',
      descriptionEn: 'A web search engine built with a decoupled architecture and its own persistence layer.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Docker'], image: 'assets/panthersearch-pc.png',
      links: [
        { labelEs: 'Visitar', labelEn: 'Visit', url: 'https://techpanther-search.vercel.app/', icon: 'fa-arrow-up-right-from-square' },
        { labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/techpanther-search-engine-frontend', icon: 'fa-code-branch' }
      ]
    },
    {
      title: 'Control Clientes', categoryEs: 'Front-end', categoryEn: 'Front-end',
      descriptionEs: 'Gestión simple y rápida de clientes con persistencia en la nube.',
      descriptionEn: 'Fast, straightforward client management with cloud persistence.',
      technologies: ['Angular', 'Firebase', 'Bootstrap'], image: 'assets/controlclientes.png',
      links: [{ labelEs: 'Visitar', labelEn: 'Visit', url: 'https://control-clientes.vercel.app/', icon: 'fa-arrow-up-right-from-square' }, { labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/control-clientes', icon: 'fa-code-branch' }]
    },
    {
      title: 'Presupuesto App', categoryEs: 'Front-end', categoryEn: 'Front-end',
      descriptionEs: 'Aplicación enfocada en registrar y visualizar presupuestos cotidianos.',
      descriptionEn: 'An app focused on recording and visualizing everyday budgets.',
      technologies: ['Angular', 'CSS', 'Bootstrap'], image: 'assets/presupuesto.png',
      links: [{ labelEs: 'Visitar', labelEn: 'Visit', url: 'https://presupuestos-app.vercel.app/', icon: 'fa-arrow-up-right-from-square' }, { labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/presupuesto-app', icon: 'fa-code-branch' }]
    },
    {
      title: 'Advice Generator', categoryEs: 'Front-end', categoryEn: 'Front-end',
      descriptionEs: 'Interfaz dinámica que consume una API para descubrir consejos al azar.',
      descriptionEn: 'A dynamic interface that consumes an API to discover random advice.',
      technologies: ['HTML', 'CSS', 'JavaScript'], image: 'assets/advicegenerator.png',
      links: [{ labelEs: 'Visitar', labelEn: 'Visit', url: 'https://thevolkner.github.io/advicegenerator/', icon: 'fa-arrow-up-right-from-square' }, { labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/advicegenerator', icon: 'fa-code-branch' }]
    },
    {
      title: 'TechPanther Wizard', categoryEs: 'Escritorio', categoryEn: 'Desktop',
      descriptionEs: 'Asistente de escritorio para diagnóstico y soporte técnico de computadores.',
      descriptionEn: 'A desktop assistant for computer diagnostics and technical support.',
      technologies: ['Java Swing', 'MySQL'], video: 'assets/TechpPanther Test.mp4',
      links: [{ labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/techpanther-wizard', icon: 'fa-code-branch' }]
    },
    {
      title: 'Sistema Blog API', categoryEs: 'Back-end', categoryEn: 'Back-end',
      descriptionEs: 'API REST segura para administrar contenido, usuarios y autenticación.',
      descriptionEn: 'Secure REST API for managing content, users and authentication.',
      technologies: ['Spring Boot', 'Spring Security', 'JWT', 'MySQL'],
      links: [{ labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/sistema-blog-api', icon: 'fa-code-branch' }]
    },
    {
      title: 'User Vehicles', categoryEs: 'Microservicios', categoryEn: 'Microservices',
      descriptionEs: 'Arquitectura distribuida para gestionar usuarios y sus vehículos.',
      descriptionEn: 'Distributed architecture for managing users and their vehicles.',
      technologies: ['Spring Cloud', 'Keycloak', 'JWT', 'MySQL'],
      links: [{ labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/microservices-usuario/tree/keycloak', icon: 'fa-code-branch' }]
    },
    {
      title: 'Contactos API', categoryEs: 'Back-end reactivo', categoryEn: 'Reactive back-end',
      descriptionEs: 'API reactiva y no bloqueante para administrar contactos.',
      descriptionEn: 'Reactive, non-blocking API for contact management.',
      technologies: ['Spring WebFlux', 'MongoDB'],
      links: [{ labelEs: 'Código', labelEn: 'Code', url: 'https://github.com/TheVolkner/reactive-contactos-mongdb', icon: 'fa-code-branch' }]
    }
  ];
}
