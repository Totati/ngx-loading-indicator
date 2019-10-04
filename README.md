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

### Compatibility

* `@angular/core`: `^7.0.0 || ^8.0.0`
* `@angular/cdk`: `^7.0.0 || ^8.0.0`
* `rxjs`: `^5.5.2 || ^6.0.0`

Optionally 
* `@angular/material`: `^7.0.0 || ^8.0.0`

## Development

### Library Build / NPM Package
Run `ng build ngx-loading-indicator --watch` to build the library and generate an NPM package. 
The build artifacts will be stored in the `dist/ngx-loading-indicator` folder.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

