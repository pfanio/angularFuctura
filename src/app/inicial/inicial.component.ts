import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  nome: string;
  alunos: string[];

  constructor() {
    this.nome = "Asdrubal";
    this.alunos = ['André', 'Lucas', 'Luan', 'Sergio', 'Genoveva', 'Creusa'];
  }

  ngOnInit(): void {
  }

}
