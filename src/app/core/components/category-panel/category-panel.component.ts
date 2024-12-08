import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/reward.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-panel',
  imports: [CommonModule, MatIconModule],
  templateUrl: './category-panel.component.html',
  styleUrl: './category-panel.component.scss'
})
export class CategoryPanelComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelect = new EventEmitter<Category>();

  toggleCategory(category: Category) {
    category.expanded = !category.expanded;
  }

  onCategoryClick(selectedCategory: Category) {
    this.categories = this.categories.map(category => ({
      ...category,
      selected: category.id === selectedCategory.id ? !category.selected : false
    }));
    this.categorySelect.emit(selectedCategory);
  }

}
