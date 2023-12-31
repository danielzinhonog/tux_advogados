import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'cadastrar', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}