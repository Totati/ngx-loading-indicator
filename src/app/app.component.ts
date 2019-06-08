import { Component } from '@angular/core';
import {
  NgxBarIndicatorService,
  NgxSpinnerIndicatorService
} from 'ngx-loading-indicator';

@Component({
  selector: 'lid-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public barIndicator: NgxBarIndicatorService,
    public spinnerIndicator: NgxSpinnerIndicatorService
  ) {
    this.barIndicator.show();
    this.spinnerIndicator.show();
  }

  onShowSpinner() {
    this.spinnerIndicator.show();
  }
  onHideSpinner() {
    this.spinnerIndicator.hide();
  }
  onResetSpinner() {
    this.spinnerIndicator.reset();
  }
}
