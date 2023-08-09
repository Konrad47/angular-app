import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
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
