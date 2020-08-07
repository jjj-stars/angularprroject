import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdComponent } from './add-prod/add-prod.component';
import { UpdateProdComponent } from './update-prod/update-prod.component';
import { ListProdComponent } from './list-prod/list-prod.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchProdComponent } from './search-prod/search-prod.component';
import { DeleteProdComponent } from './delete-prod/delete-prod.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddProdComponent,
    UpdateProdComponent,
    ListProdComponent,
    LoginComponent,
    RegisterComponent,
    SearchProdComponent,
    DeleteProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
