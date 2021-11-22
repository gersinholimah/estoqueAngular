import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  //declarou um atributo chamado el: e falou que vai ser do tipo ElementRef ou seja referencia de elemento
  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#f00'
}
//agora é só pegar oq ta entre colchetes dentro do selector e colocar no html que quero que sofra a ação
//Ta aplicado no footer
//Exemplo de diretiva de atributo, capaz de mexer tanto no comportamento quanto no estilo

}

