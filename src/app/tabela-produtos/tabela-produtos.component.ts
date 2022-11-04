import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  @Input() titulo = "";
  
  @Input() lista: any[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
