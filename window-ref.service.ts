import { Injectable } from '@angular/core';

const _window = () => { return window; }

@Injectable()
export class WindowRefService {

    constructor() {}

    get nativeWindow(): any {
      return _window();
    }
}
