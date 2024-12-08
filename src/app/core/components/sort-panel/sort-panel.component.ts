import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-panel',
  imports: [CommonModule],
  templateUrl: './sort-panel.component.html',
  styleUrl: './sort-panel.component.scss'
})
export class SortPanelComponent {
  @Output() sortChange = new EventEmitter<'asc' | 'desc'>();
  protected isPanelOpen = signal(false);
  protected currentSort = signal<'asc' | 'desc' | undefined>(undefined);

  protected togglePanel() {
    this.isPanelOpen.update(value => !value);
  }

  protected resetAll() {
    this.currentSort.set(undefined);
  }

  protected apply() {
    const sort = this.currentSort();
    if (sort) {
      this.sortChange.emit(sort);
    }
    this.isPanelOpen.set(false);
  }

  protected sortBy(direction: 'asc' | 'desc') {
    this.currentSort.set(direction);
  }
}
