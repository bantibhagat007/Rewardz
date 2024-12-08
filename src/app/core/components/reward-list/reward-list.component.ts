import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RewardService } from '../../services/reward.service';
import { SortPanelComponent } from '../sort-panel/sort-panel.component';
import { Category } from '../../interfaces/reward.interface';
import { RewardCardComponent } from '../reward-card/reward-card.component';
import { CategoryPanelComponent } from '../category-panel/category-panel.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-reward-list',
  imports: [CommonModule, SortPanelComponent, RewardCardComponent, CategoryPanelComponent, SearchBarComponent],
  templateUrl: './reward-list.component.html',
  styleUrl: './reward-list.component.scss'
})
export class RewardListComponent {
  private rewardService = inject(RewardService);
  protected rewards = this.rewardService.getFilteredAndSortedRewards();

  protected categories: Category[] = [
    { id: 1, name: 'e-Voucher', expanded: true, selected: true },
    { id: 2, name: 'Products', expanded: false, selected: false },
    { id: 3, name: 'Evergreen', expanded: false, selected: false },
    { id: 4, name: 'Fashion & Retail', expanded: false, selected: false }
  ];

  onSearch(term: string) {
    this.rewardService.setSearchTerm(term);
  }

  onSort(direction: 'asc' | 'desc') {
    this.rewardService.setSortDirection(direction);
  }

  onCategorySelect(selectedCategory: Category) {
    this.categories = this.categories.map(category => ({
      ...category,
      selected: category.id === selectedCategory.id ? !category.selected : false
    }));
    if (selectedCategory.selected) {
      this.rewardService.setCategoryFilter(selectedCategory.name);
    } else {
      this.rewardService.clearCategoryFilter();
    }
  }
}
