import { Component } from '@angular/core';

@Component({
  selector: 'tarjetaPersonal',
  templateUrl: './tarjetaPersonal.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nombre:string;
  apellidos:string;
  tlf:string;
  eda:string;

  cuenta:number;
 colores:Array<Object>;
 constructor(){
  this.cuenta = 0;
  this.colores=[
  {id: 1, tonalidad:"rojo"},
  {id: 2, tonalidad:"naranja"},
  {id: 3, tonalidad:"verde"}
  ]
  }
  sumar(){
 this.cuenta++;
 }
 restar(){
 this.cuenta--;
 }


  nom(event){
      this.nombre= event.target.value;
    }
    apellido(event){
      this.apellidos= event.target.value;
    }
    telefono(event){
      this.tlf= event.target.value;
    }
    edad(event){
      this.eda= event.target.value;
    }

}
