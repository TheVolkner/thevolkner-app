import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Correo } from '../models/Correo-model';
import { EmailServiceService } from '../services/email-service.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  nombre = '';
  apellido = '';
  email = '';
  text = '';

  constructor(
    private matSnackBar: MatSnackBar,
    private emailService: EmailServiceService,
    public i18n: LanguageService
  ) {}

  enviarCorreo(form: NgForm): void {
    const correo = new Correo();
    correo.name = `${this.nombre} ${this.apellido}`;
    correo.email = this.email;
    correo.text = this.text;

    this.emailService.enviarCorreo(correo).subscribe(
      () => {
        Swal.fire(
          this.i18n.text('¡Mensaje enviado!', 'Message sent!'),
          this.i18n.text('Gracias. Leeré tu mensaje muy pronto.', 'Thank you. I will read your message soon.'),
          'success'
        );
        form.resetForm();
      },
      () => this.matSnackBar.open(
        this.i18n.text('Hubo un problema procesando tu mensaje.', 'There was a problem processing your message.'),
        'Ok', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right' }
      )
    );
  }

  checkForm(form: NgForm): void {
    if (!form.valid) {
      this.matSnackBar.open(
        this.i18n.text('Completa correctamente todos los campos.', 'Please fill in every field correctly.'),
        'Ok', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right' }
      );
    }
  }
}
