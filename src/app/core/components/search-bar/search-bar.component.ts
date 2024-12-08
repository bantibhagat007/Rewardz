import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, Output, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  private destroyRef = inject(DestroyRef);
  searchControl = new FormControl('');
  activeFilters = signal<string[]>([]);

  constructor() {
    this.searchControl.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      if (value) {
        this.activeFilters.update(filters => {
          const searchFilter = filters.find(f => !f.startsWith('Search:'));
          const updatedFilters = searchFilter ?
            filters.filter(f => !f.startsWith('Search:')) :
            [...filters];
          return [...updatedFilters, `${value}`];
        });
      } else {
        this.activeFilters.update(filters =>
          filters.filter(f => !f.startsWith('Search:'))
        );
      }
      this.search.emit(value || '');
    });
  }

  removeFilter(filter: string) {
    this.activeFilters.update(filters =>
      filters.filter(f => f !== filter)
    );
  }

  clearAllFilters() {
    this.activeFilters.set([]);
    this.searchControl.setValue('');
  }

}
