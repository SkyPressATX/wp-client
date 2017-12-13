import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';
import { WindowRef } from './window-ref.service';

let wpConfigFactory = ( winRef: WindowRef, wpConfig?: any ) => {
    if( ! wpConfig ) return { api_root: '/', api_namespace: 'wp/v2', auth_key: '', auth_header: '' };
    if( typeof wpConfig === 'string' ) return winRef.nativeWindow[ wpConfig ];
    return wpConfig;
}

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
                WindowRef,
                {provide: 'config', useValue: config },
                {provide: 'wpClient', useClass: WpClientService },
                {provide: 'wpConfig', useFactory: wpConfigFactory, deps:[ WindowRef, 'config'] },
                {provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
            ]
        };
    }
}
