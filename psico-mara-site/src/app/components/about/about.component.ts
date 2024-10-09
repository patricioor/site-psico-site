import {Component, Input, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { CardComponent } from "../../shared/card/card.component";
import { filter } from "rxjs";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() AboutButtonText: string = "Entre em contato comigo";
  private fragmentSubscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.fragmentSubscription.add(
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          this.route.fragment.subscribe((fragment) => {
            if (fragment) {
              setTimeout(() => this.scrollToSection(fragment), 0);
            }
          });
        })
    );
  }
  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
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
