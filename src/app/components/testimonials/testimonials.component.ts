import { Component, OnInit, OnDestroy } from '@angular/core';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO',
      company: 'NovaTech Solutions',
      text: 'Deploy transformó completamente nuestra presencia digital. El equipo demostró un profesionalismo excepcional y entregaron un producto que superó todas nuestras expectativas.',
      rating: 5,
      initials: 'CM'
    },
    {
      name: 'María Fernanda López',
      role: 'Directora de Marketing',
      company: 'FreshMarket',
      text: 'La estrategia de marketing digital que implementaron triplicó nuestras conversiones en solo 4 meses. Su enfoque basado en datos marcó la diferencia.',
      rating: 5,
      initials: 'ML'
    },
    {
      name: 'Andrés Gutiérrez',
      role: 'Fundador',
      company: 'Urbana Clothing',
      text: 'Nuestra tienda online ahora es una experiencia de compra increíble. Los clientes no paran de elogiar el diseño y la facilidad de uso. ¡100% recomendados!',
      rating: 5,
      initials: 'AG'
    },
    {
      name: 'Laura Jiménez',
      role: 'CTO',
      company: 'MediConnect',
      text: 'El desarrollo de nuestra plataforma de telemedicina fue impecable. Código limpio, documentación completa y soporte post-lanzamiento de primer nivel.',
      rating: 5,
      initials: 'LJ'
    },
    {
      name: 'Roberto Sánchez',
      role: 'Director General',
      company: 'GreenEnergy Corp',
      text: 'Trabajar con Deploy fue una experiencia transformadora. Su visión estratégica y capacidad técnica nos ayudaron a posicionarnos como líderes en nuestro sector.',
      rating: 5,
      initials: 'RS'
    }
  ];

  currentIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    this.resetAutoplay();
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoplay();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoplay();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 5000);
  }

  private stopAutoplay(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
