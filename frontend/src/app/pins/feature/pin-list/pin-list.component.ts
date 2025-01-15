import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PinService } from '../../data-access/pin.service';
import { Pins } from '../../utils/pin.models';
import { BehaviorSubject, catchError, map, shareReplay } from 'rxjs';

interface PinState {
  loading: boolean;
  error: string | null;
  data: Pins[] | null;
}

const initialState: PinState = {
  loading: false,
  error: null,
  data: [],
};

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinListComponent {
  private readonly _service = inject(PinService);
  private readonly stateSubject = new BehaviorSubject<PinState>(initialState);

  // Derived states
  readonly state$ = this.stateSubject.asObservable();
  readonly loading$ = this.state$.pipe(
    map((state) => state.loading),
    shareReplay(1)
  );
  readonly error$ = this.state$.pipe(
    map((state) => state.error),
    shareReplay(1)
  );
  readonly pins$ = this.state$.pipe(
    map((state) => state.data),
    shareReplay(1)
  );

  constructor() {
    this.fetchAllPins();
  }

  fetchAllPins(): void {
    this.stateSubject.next({ ...initialState, loading: true });

    this._service
      .fetchPins()
      .pipe(
        catchError((error) => {
          console.error('Error fetching pins:', error);
          this.handleError('Failed to load pins. Please try again later.');
          throw error;
        })
      )
      .subscribe({
        next: (pins) => {
          this.stateSubject.next({
            loading: false,
            error: null,
            data: pins,
          });
        },
      });
  }

  reload(isChangesDone: boolean) {
    if (isChangesDone) {
      // timeout because we are writing data in files it is async process
      setTimeout(() => {
        this.fetchAllPins();
      }, 1000);
    }
  }

  private handleError(message: string): void {
    this.stateSubject.next({
      loading: false,
      error: message,
      data: null,
    });
  }

  // Cleanup
  ngOnDestroy(): void {
    this.stateSubject.complete();
  }

  trackByPinId(index: number, pin: Pins): number {
    return pin.id;
  }
}
