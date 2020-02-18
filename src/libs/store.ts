import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class Store<T> {

  private stateSubject: BehaviorSubject<T>;

  get state(): T {
    return this.stateSubject.value;
  }

  get state$(): Observable<T> {
    return this.stateSubject.asObservable();
  }

  protected constructor(initialState: T) {
    this.stateSubject = new BehaviorSubject(initialState);
  }

  protected update(nextState: (state: T) => T) {
    const currentState = this.stateSubject.value;
    this.stateSubject.next(nextState(currentState));
  }

  protected select<U>(selector: (state: T) => U): Observable<U> {
    return this.stateSubject.pipe(
      map(selector),
      distinctUntilChanged(),
    );
  }
}
