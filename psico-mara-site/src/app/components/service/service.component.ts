import { Component } from '@angular/core';
import {FooterComponent} from "../../shared/footer/footer.component";
import {HeaderComponent} from "../../shared/header/header.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  constructor(private router:Router) {
  }
  navigateTestimonials(): void {
    this.router.navigate(["testimonials"]);
  }
  navigateService(): void {
    this.router.navigate(["services"]);
  }
  navigateBlog(): void {
    this.router.navigate(["blog"]);
  }
}
