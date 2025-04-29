import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';

@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wishText!: string;

  @Input() fulfilled!: boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fulfilled ? ['strikeout','text-muted'] : []
    
    return { 'strikeout text-muted': this.fulfilled };
  }

  toggleFullfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }
}
