import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';
import { WindowRef } from './window-ref.service';
// import { WpConfigService } from './wp-config.service';

export const window = new WindowRef().nativeWindow;

export const wpConfig: any = {
  api_root: "/wp-json",
  api_namespace: "wp/v2"
};

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    WpClientService,
    { provide: 'wpConfig', useValue: wpConfig },
    { provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
  ]
})
export class WpClientModule {
    // static forRoot( config?: any ): ModuleWithProviders {
    //     return {
    //         ngModule: WpClientModule,
    //         providers: [
    //             {provide: 'window', useValue: window },
    //             {provide: 'wpConfig', useClass: WpConfigService },
    //             {provide: 'wpClient', useClass: WpClientService },
    //             {provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
    //         ]
    //     };
    // }
}
