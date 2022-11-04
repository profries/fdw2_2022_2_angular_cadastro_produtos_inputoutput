import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Cadastro de Produtos';
  listaProdutos: any[] = [
    {id:1, nome:"Produto 1", preco: 20},
    {id:2, nome:"Produto 2", preco: 30},
    {id:3, nome:"Produto 3", preco: 40},
    {id:4, nome:"Produto 4", preco: 50},
    {id:5, nome:"Produto 5", preco: 60},
  ]

  addProduto(produto: any) {
    alert(produto.nome+ " cadastrado com sucesso!")
    this.listaProdutos.push(produto);
  }
}
