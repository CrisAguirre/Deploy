import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  items: string[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'code',
      title: 'Desarrollo Web',
      items: [
        'Aplicaciones Web',
        'E-commerce',
        'Landing Pages',
        'Progressive Web Apps',
        'Sistemas CMS',
        'APIs & Backend',
        'Desarrollo Frontend',
        'Integración de Servicios'
      ]
    },
    {
      icon: 'smartphone',
      title: 'Desarrollo Móvil',
      items: [
        'Apps iOS Nativas',
        'Apps Android Nativas',
        'Apps Híbridas',
        'Flutter & Dart',
        'React Native',
        'Diseño de Apps',
        'Publicación en Stores',
        'Soporte y Mantenimiento'
      ]
    },
    {
      icon: 'trending-up',
      title: 'Marketing Digital',
      items: [
        'SEO & Posicionamiento',
        'SEM & Google Ads',
        'Social Media Ads',
        'Gestión de Redes Sociales',
        'Email Marketing',
        'Marketing de Contenidos',
        'Analítica Web',
        'Growth Marketing'
      ]
    },
    {
      icon: 'palette',
      title: 'Diseño & Branding',
      items: [
        'Identidad Visual',
        'Branding Corporativo',
        'Diseño UI/UX',
        'Motion Graphics',
        'Diseño de Empaques',
        'Material POP',
        'Ilustración Digital',
        'Diseño de Catálogos'
      ]
    }
  ];

  activeIndex: number | null = null;

  setActive(index: number): void {
    this.activeIndex = index;
  }

  clearActive(): void {
    this.activeIndex = null;
  }
}
