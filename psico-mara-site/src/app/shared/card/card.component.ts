import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';

  constructor(private router:Router) {
  }

  navigateService(): void {
    this.router.navigate(["service"]);
  }
}
