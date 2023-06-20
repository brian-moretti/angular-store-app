import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css'],
})
export class ProductsHeaderComponent {
  @Output() sortChange = new EventEmitter<string>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() columsCountChange = new EventEmitter<number>();

  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onItemsUpdated(newCount: number): void {
    this.itemsShowCount = newCount;
    this.itemsCountChange.emit(newCount);
  }

  onColumsUpdated(colsNumber: number): void {
    this.columsCountChange.emit(colsNumber);
  }
}
