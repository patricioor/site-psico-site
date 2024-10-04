import { Component, EventEmitter, Input, Output } from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import {filter} from "rxjs";

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
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
  isAboutPage: boolean = false;

  constructor(private router: Router) {
    // Verifica a rota atual e define isAboutPage
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isAboutPage = event.urlAfterRedirects === '/about';
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleButtonClick(buttonId: string) {
    const currentPath = this.router.url;

    if (currentPath === '/about') {
      const element = document.getElementById(buttonId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      switch (buttonId) {
        case 'home':
          this.router.navigate(['/about']);
          break;
        case 'about':
          this.router.navigate(['/about']);
          break;
        case 'services':
          this.router.navigate(['/services']);
          break;
        case 'testimonials':
          this.router.navigate(['/testimonials']);
          break;
        case 'blog':
          this.router.navigate(['/blog']);
          break;
      }
    }
  }
}
