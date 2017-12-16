import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';
import { WindowRef } from './window-ref.service';

export const window = new WindowRef().nativeWindow;

@NgModule({
  imports: [
    HttpClientModule
  ]
})
export class WpClientModule {
    static forRoot( config?: any ): ModuleWithProviders {
        return {
            ngModule: WpClientModule,
            providers: [
                {provide: 'window', useValue: window },
                {provide: 'wpConfig', useValue: config },
                {provide: 'wpClient', useClass: WpClientService },
                {provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
            ]
        };
    }
}
