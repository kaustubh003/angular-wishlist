import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import {EventService} from '../shared/services/EventService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself'),
  ];

  constructor(events:EventService) {
    events.listen('removeWish', (wish) => {
      // remove wish
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }

  filter: any;
}
