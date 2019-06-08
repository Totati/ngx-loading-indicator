import { OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, scan, shareReplay } from 'rxjs/operators';

export abstract class NgxLoadingIndicatorService<C> implements OnDestroy {
  private counter$ = new Subject<number>();
  protected abstract overlayRef: OverlayRef;
  protected abstract componentPortal: ComponentPortal<C>;
  refNumber$: Observable<number>;
  attached: ComponentRef<C> | null;

  constructor() {
    this.refNumber$ = this.counter$.pipe(
      scan((acc, next) => {
        if (!next) {
          return 0;
        }
        return acc + next >= 0 ? acc + next : 0;
      }, 0),
      shareReplay(1)
    );

    this.refNumber$
      .pipe(
        map(val => val > 0),
        distinctUntilChanged()
      )
      .subscribe(res => {
        if (res) {
          this.attached = this.overlayRef.attach(this.componentPortal);
        } else {
          this.overlayRef.detach();
          this.attached = null;
        }
      });
  }

  show() {
    this.counter$.next(1);
  }

  hide() {
    this.counter$.next(-1);
  }

  reset() {
    this.counter$.next(0);
  }

  ngOnDestroy() {
    this.counter$.complete();
    this.overlayRef.dispose();
    this.attached = null;
  }
}
