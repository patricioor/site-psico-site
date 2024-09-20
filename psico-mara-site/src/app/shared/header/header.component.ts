import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() text: string = '';
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() tertiaryBtnText: string = "";
  @Input() quaternaryBtnText: string = "";
  @Input() quinaryBtnText: string = "";
  @Input() senaryBtnText: string = "";
  @Output("navigate") onNavigate = new EventEmitter();


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
