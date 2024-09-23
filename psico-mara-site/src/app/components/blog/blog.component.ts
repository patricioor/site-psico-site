import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  constructor(private router:Router) {
  }
  navigateTestimonials(): void {
    this.router.navigate(["testimonials"]);
  }

  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }
}
