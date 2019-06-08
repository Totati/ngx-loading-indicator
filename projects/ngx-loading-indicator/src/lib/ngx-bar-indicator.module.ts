import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import {
  MatProgressBar,
  MatProgressBarModule
} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatProgressBarModule, OverlayModule],
  entryComponents: [MatProgressBar]
})
export class NgxBarIndicatorModule {}
