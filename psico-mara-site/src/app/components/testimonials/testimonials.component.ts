import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {Router} from "@angular/router";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-testimonials',
  standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        CardComponent
    ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  constructor(private router:Router) {
  }
  navigateTestimonials(): void {
    this.router.navigate(["testimonials"]);
  }

  navigateService(): void {
    this.router.navigate(["service"]);
  }

  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }

}
