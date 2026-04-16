import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'NovaTech Solutions',
      category: 'Desarrollo Web',
      description: 'Plataforma SaaS completa para gestión empresarial con dashboards en tiempo real y analítica avanzada.',
      tags: ['Angular', 'Node.js', 'MongoDB'],
      color: '#00d4ff'
    },
    {
      title: 'FreshMarket App',
      category: 'Desarrollo Móvil',
      description: 'Aplicación móvil de delivery de productos orgánicos con geolocalización y pagos integrados.',
      tags: ['Flutter', 'Firebase', 'Stripe'],
      color: '#0ea5e9'
    },
    {
      title: 'Urbana Clothing',
      category: 'E-Commerce',
      description: 'Tienda online de moda con experiencia de compra personalizada e integración con redes sociales.',
      tags: ['React', 'Shopify', 'SEO'],
      color: '#6366f1'
    },
    {
      title: 'GreenEnergy Corp',
      category: 'Marketing Digital',
      description: 'Estrategia 360° de marketing digital que triplicó las conversiones en 6 meses para empresa de energías renovables.',
      tags: ['Google Ads', 'SEO', 'Analytics'],
      color: '#10b981'
    },
    {
      title: 'MediConnect Pro',
      category: 'Desarrollo Web',
      description: 'Sistema de telemedicina con videollamadas HD, gestión de citas y expedientes clínicos digitales.',
      tags: ['Angular', 'WebRTC', 'AWS'],
      color: '#f59e0b'
    },
    {
      title: 'ArtSpace Gallery',
      category: 'Diseño & Branding',
      description: 'Identidad visual completa y sitio web inmersivo para galería de arte contemporáneo con experiencia 3D.',
      tags: ['Three.js', 'Branding', 'UI/UX'],
      color: '#ec4899'
    }
  ];
}
