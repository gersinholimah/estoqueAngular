import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  //posso mudar o nome do seletor como abaixo
  //o padrão de fabrica é selector: '[appFor]' mas pode ser alterado como no exemplo abaixo
    selector: '[myFor]'
    //esse *myFor="" é a diretiva q vai la no html
})
export class ForDirective  implements OnInit {
//no html vai ficar <li myFor="let n em [1, 2, 3]"
  
 //sintax abaixo quer dizer que vai pegar aquilo que 
//vem logo após a palavra chave em... o msm em do html

 

@Input('myForEm') numbers!: number[]
 
  constructor(
    //Injeta essas outras duas coisas abaixo 
    private container:ViewContainerRef,
    private template: TemplateRef<any>
    ) { 
    //console.log('MyFor')
 //não adicionei nada no construtor mas adicionei la na inicialização ngOnInit
  }
 
  
//ngOnit Adiciona um ciclo de vida que é o de inicialização

  ngOnInit(): void {
    //number e texto são os valores especificados no imput
for(let number of this.numbers);{
this.container.createEmbeddedView(this.template) //template vai ser exatamente oque eu vou querer aplicar dentro da diretiva no caso a li la no footer
}

    console.log(this.numbers)
   }
}
