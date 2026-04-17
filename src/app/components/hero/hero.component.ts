import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  stats = [
    { value: 0, target: 50, suffix: '+', label: 'Proyectos Exitosos' },
    { value: 0, target: 30, suffix: '+', label: 'Clientes Satisfechos' },
    { value: 0, target: 5, suffix: '+', label: 'Años de Experiencia' },
    { value: 0, target: 99, suffix: '%', label: 'Satisfacción' }
  ];

  private countersStarted = false;

  ngOnInit(): void {
    setTimeout(() => this.animateCounters(), 800);
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  private animateCounters(): void {
    if (this.countersStarted) return;
    this.countersStarted = true;

    this.stats.forEach((stat) => {
      const duration = 2000;
      const start = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        stat.value = Math.round(eased * stat.target);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }
}
