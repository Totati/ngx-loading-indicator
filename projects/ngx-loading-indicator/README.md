[![npm version](http://img.shields.io/npm/v/ngx-loading-indicator.svg)](https://npmjs.org/package/ngx-loading-indicator)
[![Downloads](http://img.shields.io/npm/dm/ngx-loading-indicator.svg)](https://npmjs.org/package/ngx-loading-indicator)

# Purpose

Easily show and hide a loading indicator using a service.

# Usage

Install from npm (https://www.npmjs.com/package/ngx-loading-indicator)

```sh
npm install --save ngx-loading-indicator
```

Import the indicator module to your module

```javascript
import {
  NgxBarIndicatorModule,
  NgxSpinnerIndicatorModule
} from "ngx-loading-indicator";
```

Inject the services and use them.

```javascript
import {
  NgxBarIndicatorService,
  NgxSpinnerIndicatorService
} from 'ngx-loading-indicator';

export class AppComponent {
  constructor(
    public spinnerIndicator: NgxSpinnerIndicatorService,
    public barIndicator: NgxBarIndicatorService,
  ) {
    this.spinnerIndicator.show();
    this.spinnerIndicator.hide();
    this.spinnerIndicator.reset();
  }
}
```
