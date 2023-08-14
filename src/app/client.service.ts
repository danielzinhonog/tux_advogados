import { Injectable } from '@angular/core';

export interface Client {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  idade: number;
  endereco: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [];

  addClient(newClient: Client): void {
    this.clients.push(newClient);
  }

  getClients(): Client[] {
    return this.clients;
  }

  getClientsAbove60(): Client[] {
    return this.clients.filter(client => client.idade > 60);
  }
}
