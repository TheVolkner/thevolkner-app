import { EmailServiceService } from './../services/email-service.service';
import { Correo } from './../models/Correo-model';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  nombre:string = '';
  apellido:string = '';
  email:string = '';
  text:string = '';


  //INCLUIMOS EL SERVICIO DE EMAIL Y EL SNACK BAR
  constructor(private matSnackBar:MatSnackBar,private emailService:EmailServiceService){}

  //LLAMAMOS AL SERVICIO PARA ENVIAR EL CORREO
  enviarCorreo(form:NgForm){

    let correo = new Correo();

    //CREAMOS EL OBJETO CORREO Y LE ASIGNAMOS LOS ATRIBUTOS NECESARIOS
    correo.name = this.nombre + " " +  this.apellido;
    correo.email = this.email;
    correo.text = this.text;

    //ENVIAMOS EL OBJETO CORREO AL SERVICIO PARA ENVIARLO AL BACK-END
    //SI SE ENVÍA CORRECTAMENTE, MOSTRAMOS EL SWEET ALERT DE SUCCESS Y LIMPIAMOS CAMPOS
    this.emailService.enviarCorreo(correo).subscribe(
      (data) => {
        Swal.fire('¡Message sent!', 'Thank you, I will read your message soon!', 'success');
        this.nombre = '';
        this.apellido = '';
        this.email = '';
        this.text = '';
      },
      (error) => {
        this.matSnackBar.open('Oh! There was a little problem proccessing your message','Ok',{
          duration:3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'right'
        });
      }
    );
  }

   //COMPROBAR EL FORMULARIO PARA INDICARLE AL USUARIO QUE DEBE LLENAR LOS CAMPOS
   checkForm(form:NgForm){

    //COMPROBAMOS SI ES VALIDO
    if(!form.valid){

      //INDICAMOS EL SNACK BAR CON EL MENSAJE DE ALERTA DE QUE LLENE LOS CAMPOS
      //INDICAMOS EN LA CONFIG LA DURACIÓN, Y LA POSICION X E Y
      this.matSnackBar.open('¡Please ensure you correctly filled all the fields!','Ok',{
        duration:3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right'
      });
    }
  }
}
