import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Inicio', fragment: 'hero' },
    { label: 'Servicios', fragment: 'servicios' },
    { label: 'Nosotros', fragment: 'nosotros' },
    { label: 'Portafolio', fragment: 'portafolio' },
    { label: 'Contacto', fragment: 'contacto' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollTo(fragment: string): void {
    this.closeMobileMenu();
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
