import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './prdoduct.module';

@Injectable({ // o decorator ta dizendo que a classe pode ser injetada em outras clsses
  providedIn: 'root'
})
export class ProductService {

  baseUrl = " http://localhost:3000/products"

  constructor( 
    private snackBar: MatSnackBar,
    private http: HttpClient //em cima não é HttpClientModule e sim HttpClient
    ) { }


showMessage(msg: string): void{
     this.snackBar.open(msg, 'x', {  //entre aspas vai o texto do btn que vai no toast
         duration: 3000,
         horizontalPosition: "right",
         verticalPosition: "top"
     })
}

//Ja que ele não consegue trazer de imediato, ele vai trazer a resposta doq é possivel observar
create(product: Product): Observable<Product> { //importa la em cima product.module
 return this.http.post<Product>(this.baseUrl, product)
 // http://localhost:3000
}

read(): Observable<Product[]> {
  return this.http.get<Product[]> (this.baseUrl)
}

readById(id: string): Observable<Product> {
  const url = `${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
}

update(product: Product): Observable<Product>{
  const url = `${this.baseUrl}/${product.id}`
  return this.http.put<Product>(url, product)
}

delete(id: string): Observable<Product> {
  const url = `${this.baseUrl}/${id}`
  return this.http.delete<Product>(url)
}

}
