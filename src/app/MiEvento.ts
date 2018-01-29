import {Directive} from '@angular/core';

@Directive({
  selector:'[MiEvento]',
  host:{
'(mouseover)':'entrar($event)',
'(mouseout)':'salir($event)'
}
})
export class MiEvento{

  entrar(event){
    event.target.style.fontSize = '30px';
    event.target.style.color = "blue";
  }

  salir(event){
  event.target.style.fontSize = '20px';
  event.target.style.color = "black";
}
}
