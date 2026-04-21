import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      label: 'WhatsApp',
      value: '+57 313 773 3408',
      link: 'https://wa.me/573137733408?text=%C2%A1Hola!%20%F0%9F%91%8B%2C%20estoy%20interesado%20en%20cotizar%20un%20proyecto%20y%20me%20gustar%C3%ADa%20recibir%20una%20asesor%C3%ADa...'
    },
    {
      icon: 'map',
      label: 'Ubicación',
      value: 'San Juan de Pasto, Colombia',
      link: '#'
    }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

      // REEMPLAZA ESTA URL CON TU ENDPOINT DE FORMSPREE
      const formspreeEndpoint = 'https://formspree.io/f/mqewybab';

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(formspreeEndpoint, this.contactForm.value, { headers }).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.isSubmitted = true;
          this.contactForm.reset({ service: '' });
          setTimeout(() => {
            this.isSubmitted = false;
          }, 4000);
        },
        error: (error) => {
          console.error('Error sending form', error);
          this.isSubmitting = false;
          alert('Hubo un error al enviar el mensaje. Por favor revisa el ID de Formspree.');
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  isInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && control.touched;
  }
}
