import { Component } from '@angular/core';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  image?: string;
  url?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Watercycle',
      category: 'Simulador / Educación',
      description: 'Simulador meteorológico y del ciclo del agua interactivo con animaciones isométricas.',
      tags: ['Angular', 'Educación', 'Animación'],
      color: '#00d4ff',
      image: 'assets/refs/Watercycle-04-21-2026_01_19_AM.png',
      url: 'https://simuladorps-udes.vercel.app/'
    },
    {
      title: 'Fretzia Bakery®',
      category: 'Branding & E-Commerce',
      description: 'Página web y catálogo interactivo para panadería y repostería artesanal.',
      tags: ['Diseño', 'Web', 'Alimentos'],
      color: '#ec4899',
      image: 'assets/refs/Fretzia-Bakery®-04-21-2026_01_14_AM.png',
      url: 'https://fretzia-bakery.vercel.app'
    },
    {
      title: 'FísicaLab',
      category: 'Educación',
      description: 'Plataforma web para talleres interactivos enfocados en el aprendizaje de Física.',
      tags: ['E-learning', 'Física', 'Desarrollo Web'],
      color: '#0ea5e9',
      image: 'assets/refs/FísicaLab-—-Talleres-Interactivos-de-Física-04-21-2026_01_13_AM.png',
      url: 'https://simulador-phet-mp.vercel.app'
    },
    {
      title: 'GVS Colombia',
      category: 'Sitio Corporativo',
      description: 'Portal web corporativo para líderes en sistemas de seguridad en Colombia.',
      tags: ['B2B', 'Seguridad', 'Corporativo'],
      color: '#10b981',
      image: 'assets/refs/GVS-Colombia-Líderes-en-sistemas-de-seguridad-04-21-2026_01_17_AM.png',
      url: 'https://www.gvscolombia.com'
    },
    {
      title: 'GVS USA',
      category: 'E-Commerce B2B',
      description: 'Plataforma principal de distribución mayorista de sistemas de seguridad en USA.',
      tags: ['E-Commerce', 'B2B', 'Seguridad'],
      color: '#f59e0b',
      image: 'assets/refs/GVS-USA-Wholesale-Security-Systems-CCTV-Networking-Hard-Drives-–-gvsusa-04-21-2026_01_15_AM.png',
      url: 'https://shop.gvs-usa.com'
    },
    {
      title: 'Corte Suprema de Justicia',
      category: 'Sistema de Consulta',
      description: 'Sistema de consulta de providencias judiciales.',
      tags: ['Gobierno', 'Consulta', 'Legal'],
      color: '#ef4444',
      image: 'assets/refs/CONSULTA-POR-TEXTO-COMPLETO-04-21-2026_01_15_AM.png',
      url: 'https://consultaprovidencias.cortesuprema.gov.co'
    },
    {
      title: 'Kemistry Clothing eShop',
      category: 'E-Commerce / Moda',
      description: 'Tienda en línea orientada a la moda y ropa, con un catálogo completo y moderno.',
      tags: ['E-Commerce', 'Moda', 'Web'],
      color: '#6366f1',
      image: 'assets/refs/Kemistry-Clothing-eShop-04-21-2026_01_13_AM.png',
      url: 'https://kemistry.vercel.app'
    },
    {
      title: 'Inpel S.A.',
      category: 'Catálogo Corporativo',
      description: 'Catálogo especializado de productos eléctricos de medida y comunicación industrial.',
      tags: ['Industria', 'Eléctrico', 'Catálogo'],
      color: '#eab308',
      image: 'assets/refs/Productos-eléctricos-de-medida-y-comunicación-Inpel-S-A--04-21-2026_01_15_AM.png',
      url: 'https://www.inpel.com.co'
    },
    {
      title: 'App GVS Express',
      category: 'App Móvil / Web',
      description: 'Landing y portal destinado para clientes Express de GVS en el ecosistema App Store.',
      tags: ['App', 'Móvil', 'UX/UI'],
      color: '#4f46e5',
      image: 'assets/refs/App-GVS-Express-App-Store-04-21-2026_01_15_AM.png',
      url: 'https://apps.apple.com'
    }
  ];
}
