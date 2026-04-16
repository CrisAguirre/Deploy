import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Inicio', fragment: 'hero' },
    { label: 'Servicios', fragment: 'servicios' },
    { label: 'Nosotros', fragment: 'nosotros' },
    { label: 'Portafolio', fragment: 'portafolio' },
    { label: 'Contacto', fragment: 'contacto' }
  ];

  services = [
    'Desarrollo Web',
    'Desarrollo Móvil',
    'Marketing Digital',
    'Diseño UI/UX',
    'Branding',
    'Consultoría'
  ];

  scrollTo(fragment: string): void {
    const el = document.getElementById(fragment);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
