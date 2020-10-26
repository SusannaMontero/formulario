import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  erDNI = '^[0-9]{8}[A-Za-z]$';
  mostrarInfo = "";
  mostrarMensaje = "";

  EnviarDatos(nombre, dni, mensaje){

    if(nombre.value =="") {
      alert("El nombre esta vacío");
    }

    if(dni.match(this.erDNI)) {
      this.mostrarInfo="Correcto";

    }else {
      this.mostrarInfo="Incorrecto";
    }

    if(mensaje.value.length <= 2) {
      this.mostrarMensaje = "El texto introducido es demasiado corto";
    }
  }
}





