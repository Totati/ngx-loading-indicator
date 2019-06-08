import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {
  MatProgressSpinnerModule,
  MatSpinner
} from '@angular/material/progress-spinner';

@NgModule({
  imports: [MatProgressSpinnerModule, OverlayModule],
  entryComponents: [MatSpinner]
})
export class NgxSpinnerIndicatorModule {}
