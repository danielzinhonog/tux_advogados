import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Enviar";
  dados = {
    nome: "",
    sobrenome: "",
    cpf: "",
    idade: "",
    endereco: ""
  };

  constructor(private usuarios_Cadastrados:HttpClient){}

  cadastro(form:any){
    this.usuarios_Cadastrados.post('http://localhost:3000/clientes', form.value, this.httpOptions).subscribe();
  }
}