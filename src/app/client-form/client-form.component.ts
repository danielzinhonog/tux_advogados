import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Client, ClientService} from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  newClient: Client = {
    id: 0,
    nome: '',
    sobrenome: '',
    cpf: '',
    idade: 0,
    endereco: '',
  };

  constructor(private clientService: ClientService) {}

  cadastrarCliente(): void {
    this.clientService.addClient(this.newClient);
    this.newClient = {
      id: 0,
      nome: '',
      sobrenome: '',
      cpf: '',
      idade: 0,
      endereco: '',
    };
  }
}