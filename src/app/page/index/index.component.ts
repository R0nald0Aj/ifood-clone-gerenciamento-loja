import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  apiData = [
    {
      url : 'https://images.unsplash.com/photo-1712652036636-3a59a45ca24c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "1"
    },
    {
      url : 'https://images.unsplash.com/photo-1712652036538-9b9f0cf50b84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "2"
    },
    {
      url : 'https://images.unsplash.com/photo-1712603163700-6872c112ecbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "3"
    },
    {
      url : 'https://images.unsplash.com/photo-1712603163700-6872c112ecbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "4"
    },
    {
      url : 'https://images.unsplash.com/photo-1712603163700-6872c112ecbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "5"
    }, {
      url : 'https://images.unsplash.com/photo-1712603163700-6872c112ecbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id : "5"
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 200,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
produtos: Produto[] = [
  {
    id : '1',
    nomeProduto:"Hamburguer ",
    valorDeVenda:12.32,
    valorRecebido:10.01,
    data:"12/12/2024",
    status:"finalizado"
  },
  {
    id : '2',
    nomeProduto:"Bolo de Chocolate ",
    valorDeVenda:32.54,
    valorRecebido:20.05,
    data:"10/05/2024",
    status:"em andamento"
  }
];

constructor(){

}

}
