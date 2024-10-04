import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {MatMenuItem} from "@angular/material/menu";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatMenuItem
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imagePath: string = '';
  @Input() buttonName: string = '';
  @Input() path: string = '';


  constructor(private router:Router) {
  }

  navigatePath(): void {
    this.router.navigate([this.path]);
  }
}
