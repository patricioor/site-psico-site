import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
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

  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }

}
