import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-hipnoterapia',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './hipnoterapia.component.html',
  styleUrl: './hipnoterapia.component.scss'
})
export class HipnoterapiaComponent {

}
