import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../prdoduct.module';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // Na inicialização vai chamar o productservice vai obter os products, vai alterar a variavel Product que vai alterar o componente Product e alterar o array Product[]
    this.productService.read().subscribe(products => {
       this.products = products
       console.log(products);
    })
  }

}

