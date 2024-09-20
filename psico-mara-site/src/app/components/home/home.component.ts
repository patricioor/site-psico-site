import {Component, Input, input} from '@angular/core';
import {HeaderComponent} from "../../shared/header/header.component";
import {Router} from "@angular/router";
import {FooterComponent} from "../../shared/footer/footer.component";
import {CardComponent} from "../../shared/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() AboutButtonText: string = "Mais sobre mim";

  constructor(private router: Router) {
  }

  navigateHome() {
    this.router.navigate(["home"])
  }

  navigateAbout() {
    this.router.navigate(["about"])
  }

  navigateServices() {
    this.router.navigate(["services"])
  }

  navigateTestimonials() {
    this.router.navigate(["testimonials"])
  }

  navigateContact() {
    this.router.navigate(["contact"])
  }

  navigateBlog() {
    this.router.navigate(["blog"])
  }
}
