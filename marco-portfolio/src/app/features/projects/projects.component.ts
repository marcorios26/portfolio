import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  readonly projects;

  constructor(portfolio: PortfolioService) {
    this.projects = portfolio.projects;
  }
}
