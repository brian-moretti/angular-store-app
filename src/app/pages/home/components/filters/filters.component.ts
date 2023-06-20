import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit, OnDestroy {
  //categories: Array<string> = ['Shoes', 'Sports'];

  categories: Array<string> | undefined;
  categorySubscription: Subscription | undefined;

  @Output() showCategory = new EventEmitter<string>();

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.categorySubscription = this.store
      .getAllCategories()
      .subscribe((response) => (this.categories = response));
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }
}
