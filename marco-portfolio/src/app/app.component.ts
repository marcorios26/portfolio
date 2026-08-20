import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ContactComponent } from './features/contact/contact.component';
import { PortfolioService } from './services/portfolio.service';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ExperienceComponent, ProjectsComponent, SkillsComponent, ContactComponent, LanguageSwitcherComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly profile;
  readonly year = new Date().getFullYear();

  constructor(portfolio: PortfolioService) {
    this.profile = portfolio.profile;
  }
  private translate = inject(TranslateService);

  ngOnInit(): void {
    const saved = localStorage.getItem('lang');
    this.translate.use(saved ?? 'en');
  }
  
}
