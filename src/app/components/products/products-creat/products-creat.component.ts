import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../prdoduct.module';

@Component({
  selector: 'app-products-creat',
  templateUrl: './products-creat.component.html',
  styleUrls: ['./products-creat.component.css']
})
export class ProductsCreatComponent implements OnInit {

  //só depois de adicionar o observable no service
  product: Product = {  
  name: '',
  price: null

 
  

  //name: 'Produto de teste',
  //price: 125.98
}

  constructor( 
    //primeiro faz esse
    private productService: ProductService,
    private Router: Router) { }
  propLegal = 'Mensagem'
  
  ngOnInit(): void {
  }
  //segundo faz esse
  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {  
    this.productService.showMessage('produto criado')
    this.Router.navigate(['/products'])
  })
  }
  //terceiro faz esse
  cancel(): void{
    this.Router.navigate(['/products'])
  }
  //se não exibir os botões na página, verifica se chamou no app.module.ts
}
