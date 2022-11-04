import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {

  listaProdutos: any[] = [
    {id:1, nome:"Produto 1", preco: 20},
    {id:2, nome:"Produto 2", preco: 30},
    {id:3, nome:"Produto 3", preco: 40},
    {id:4, nome:"Produto 4", preco: 50},
    {id:5, nome:"Produto 5", preco: 60},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
