import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { NgxLoadingIndicatorService } from './ngx-loading-indicator.service';

@Injectable({
  providedIn: 'root'
})
export class NgxSpinnerIndicatorService extends NgxLoadingIndicatorService<
  MatSpinner
> {
  componentPortal = new ComponentPortal(MatSpinner);
  overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()
  });

  constructor(public overlay: Overlay) {
    super();
  }
}
