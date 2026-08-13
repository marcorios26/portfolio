import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../core/models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly categories;
  readonly selectedCategory;
  readonly filteredSkills;

  constructor(private readonly portfolio: PortfolioService) {
    this.categories = portfolio.categories;
    this.selectedCategory = portfolio.selectedCategory;
    this.filteredSkills = portfolio.filteredSkills;
  }

  select(category: SkillCategory | 'all'): void {
    this.portfolio.setCategory(category);
  }
}
