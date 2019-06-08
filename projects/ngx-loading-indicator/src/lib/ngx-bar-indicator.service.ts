import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { delay } from 'rxjs/operators';
import { NgxLoadingIndicatorService } from './ngx-loading-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class NgxBarIndicatorService extends NgxLoadingIndicatorService<
  MatProgressBar
> {
  componentPortal = new ComponentPortal(MatProgressBar);
  overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .top(),
    width: '100%'
  });

  constructor(public overlay: Overlay) {
    super();
    this.overlayRef
      .attachments()
      .pipe(delay(0))
      .subscribe(() => {
        this.attached.instance.mode = 'indeterminate';
      });
  }
}
