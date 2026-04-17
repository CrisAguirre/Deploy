import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  isSubmitted = false;

  serviceOptions = [
    'Desarrollo Web',
    'Desarrollo Móvil',
    'Marketing Digital',
    'Diseño & Branding',
    'Consultoría',
    'Otro'
  ];

  contactInfo = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'crisaguirredev@gmail.com',
      link: 'mailto:crisaguirredev@gmail.com'
    },
    {
      icon: 'phone',
      label: 'Teléfono',
      value: '+57 313 773 3408',
      link: 'https://wa.me/573137733408'
    },
    {
      icon: 'map',
      label: 'Ubicación',
      value: 'San Juan de Pasto, Colombia',
      link: '#'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      service: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.contactForm.reset();
        setTimeout(() => {
          this.isSubmitted = false;
        }, 4000);
      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && control.touched;
  }
}
