import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  @Input()  titleCardInfo :string =''
  @Input() valorInfo :string = "0,00"
  @Input() textInfo :string =''
  @Input() subTextInfo :string = ''
  @Input() titleLink : string =' '
  @Input()  linkRoute: string =''
}
