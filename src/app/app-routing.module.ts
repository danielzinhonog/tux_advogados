import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clientes', component: ClientListComponent },
  { path: 'cadastrar', component: ClientFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}