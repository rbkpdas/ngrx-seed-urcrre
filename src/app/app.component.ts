import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import * as counterActions from './actions/counter.actions';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  currentUrl: Observable<string> = this.store.select(fromRoot.selectUrl);
  counter: Observable<number> = this.store.select(fromRoot.getCount);

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(counterActions.increment());
  }

  decrement() {
    this.store.dispatch(counterActions.decrement());
  }

  reset() {
    this.store.dispatch(counterActions.reset());
  }
}
