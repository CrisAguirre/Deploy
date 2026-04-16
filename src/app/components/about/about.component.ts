import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  values = [
    {
      icon: 'target',
      title: 'Estrategia',
      description: 'Cada proyecto comienza con un análisis profundo de tus objetivos de negocio para trazar el camino correcto.'
    },
    {
      icon: 'zap',
      title: 'Innovación',
      description: 'Utilizamos las últimas tecnologías y tendencias para crear soluciones que marcan la diferencia.'
    },
    {
      icon: 'shield',
      title: 'Calidad',
      description: 'Código limpio, diseño pixel-perfect y atención al detalle en cada entregable.'
    },
    {
      icon: 'users',
      title: 'Colaboración',
      description: 'Trabajamos contigo como un equipo, manteniendo comunicación constante en cada fase del proyecto.'
    }
  ];

  techStack = [
    'Angular', 'React', 'Node.js', 'Python',
    'Flutter', 'AWS', 'Firebase', 'MongoDB',
    'TypeScript', 'Docker', 'Figma', 'WordPress'
  ];

  ngOnInit(): void {}
}
