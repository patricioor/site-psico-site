import { Routes } from '@angular/router';
import {AboutComponent} from "./components/about/about.component";
import {TestimonialsComponent} from "./components/testimonials/testimonials.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ServiceComponent} from "./components/service/service.component";
import {TrgComponent} from "./components/service/trg/trg.component";
import {AnaliseCorporalComponent} from "./components/service/analise-corporal/analise-corporal.component";
import {TravasMentaisComponent} from "./components/service/travas-mentais/travas-mentais.component";
import {HipnoterapiaComponent} from "./components/service/hipnoterapia/hipnoterapia.component";

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'services/trg', component: TrgComponent},
  { path: 'services/analise-corporal', component: AnaliseCorporalComponent},
  { path: 'services/travas-mentais', component: TravasMentaisComponent},
  { path: 'services/hipnoterapia', component: HipnoterapiaComponent},
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: 'about' }
];
