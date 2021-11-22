import { MatTable, MatTableModule } from '@angular/material/table';
import { NgModule, LOCALE_ID } from '@angular/core'; //LOCALE_ID altera pontuação de moeda para pt-BR pra usar o pipe
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
//não ultilizar as 2 diretivas abaixo
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductsCreatComponent } from './components/products/products-creat/products-creat.component';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductRead2Component } from './components/products/product-read2/product-read2.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatIconModule } from '@angular/material/icon';

import localePt from '@angular/common/locales/pt';      //altera pontuação de moeda para pt-BR
import { registerLocaleData } from '@angular/common';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';   //altera pontuação de moeda para pt-BR

registerLocaleData(localePt)  //altera pontuação de moeda para pt-BR

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    //não ultilizar as 2 diretivas abaixo
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductsCreatComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    
    MatIconModule,
    MatSortModule
  ],
  providers: [{
    provide: LOCALE_ID, //altera pontuação de moeda para pt-BR
    useValue:'pt-BR'    //altera pontuação de moeda para pt-BR
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
