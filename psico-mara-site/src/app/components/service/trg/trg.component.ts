import { Component } from '@angular/core';
import {FooterComponent} from "../../../shared/footer/footer.component";
import {HeaderComponent} from "../../../shared/header/header.component";

@Component({
  selector: 'app-trg',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './trg.component.html',
  styleUrl: './trg.component.scss'
})
export class TrgComponent {

}
