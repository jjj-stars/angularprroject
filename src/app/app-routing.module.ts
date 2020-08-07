import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AddProdComponent } from './add-prod/add-prod.component';
import {ListProdComponent} from './list-prod/list-prod.component';
import {UpdateProdComponent} from './update-prod/update-prod.component';
import {DeleteProdComponent} from './delete-prod/delete-prod.component';
import {SearchProdComponent} from './search-prod/search-prod.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  {
    component:AddProdComponent,
    path:'add'
  },
  
  {
    component:UpdateProdComponent,
    path:'update/:id'
  },
  {
    component:DeleteProdComponent,
    path:'delete'
  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },{
    component:SearchProdComponent,
    path:'search'
  },
  {
    component:ListProdComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
