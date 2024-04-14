import { Component, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent {

 @Input() produtos: Produto[] =[]

}
