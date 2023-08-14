import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  @Input() negrito: boolean = false;
  clients: Client[] = [];
  seniorClients: Client[] = [];
  seniorExist: boolean = false;
  noSeniorsMessage: string = 'Não existem clientes acima de 60 anos.';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    console.log('ngOnInit in ClientListComponent');
    this.clients = this.clientService.getClients();
  }

  exibirClientesMaiores60(): void {
    this.seniorClients = this.clientService.getClientsAbove60();
    this.seniorExist = this.seniorClients.length > 0;
  }
}