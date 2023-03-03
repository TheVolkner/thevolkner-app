import { Correo } from './../models/Correo-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
//ESTE SERVICIO SERÁ PARA ENVIAR EL CORREO DE PARTE DEL CLIENTE EN EL PORTFOLIO
export class EmailServiceService {

  //INICIALIZAMOS EL httpClient
  constructor(private httpClient:HttpClient) { }

  //ENVIAMOS EL CORREO
  enviarCorreo(correo:Correo){

    return this.httpClient.post(`${baseUrl}/api/email/send`,correo);

  }
}
