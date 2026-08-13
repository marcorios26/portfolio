import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  readonly experiences;

  constructor(portfolio: PortfolioService) {
    this.experiences = portfolio.experiences;
  }
}
