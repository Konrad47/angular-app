import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, interval, map, take } from 'rxjs';
import { LogOut } from 'src/app/core/stores/store-ngxs/auth/auth.actions';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent {
  constructor(private store: Store) {}
  onLogOut() {
    this.store.dispatch(new LogOut());
  }
}
// let obs = interval(1000).pipe(
//   take(4),
//   map((v) => v * 2)
// );

// obs.subscribe((value) => console.log(`Subscriber: ${value}`));
