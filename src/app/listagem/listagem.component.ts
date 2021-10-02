import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  assuntos: string[];
  constructor() {
    this.assuntos = ['Diretivas', 'Serviços', 'Dependências', 'Propriedades'];
  }

  ngOnInit(): void {
  }

}
