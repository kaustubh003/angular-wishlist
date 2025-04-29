import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import {EventService} from '../../shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  standalone: false,
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;

  get cssClasses() {
    // return this.fulfilled ? ['strikeout','text-muted'] : []

    return { 'strikeout text-muted': this.wish.isComplete };
  }

  constructor (private events: EventService) {
    
  }

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
  }
}
