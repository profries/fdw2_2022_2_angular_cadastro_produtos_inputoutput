import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  produto: any = {id:0, nome:'', preco: 0.0};

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    alert(this.produto.nome)
    this.produto = {id:0, nome:'', preco: 0.0};

  }

}
