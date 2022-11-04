import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {

  produto: any = {id:0, nome:'', preco: 0.0};
  @Output() onSalvar = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    //alert(this.produto.nome)
    this.onSalvar.emit(this.produto);
    this.produto = {id:0, nome:'', preco: 0.0};

  }

}
