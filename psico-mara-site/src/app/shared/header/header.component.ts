import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {window} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatButton,
    MatToolbar,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLink
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
  @Input() septnaryBtnText: string = "";

  @Output("navigate") onNavigate = new EventEmitter();

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private router: Router) {
  }

  navigateHome() {
    this.router.navigate(["home"])
  }

  navigateAbout() {
    this.router.navigate(["about"])
  }

  navigateService() {
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

  protected readonly window = window;
}
