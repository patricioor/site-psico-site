import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-travas-mentais',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './travas-mentais.component.html',
  styleUrl: './travas-mentais.component.scss'
})
export class TravasMentaisComponent {

}
