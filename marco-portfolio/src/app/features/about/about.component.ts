import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly summary;
  readonly metrics;

  constructor(portfolio: PortfolioService) {
    this.summary = portfolio.profile.summary;
    this.metrics = portfolio.metrics;
  }
}
