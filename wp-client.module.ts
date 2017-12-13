import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';
import { WindowRef } from './window-ref.service';

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
                {provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true },
                {
                    provide: 'wpConfig',
                    useFactory( winRef: WindowRef, wpConfig?: any ){
                        if( ! wpConfig ) return { api_root: '/', api_namespace: 'wp/v2', auth_key: '', auth_header: '' };
                        if( typeof wpConfig === 'string' ) return winRef.nativeWindow[ wpConfig ];
                        return wpConfig;
                    },
                    deps:[ WindowRef, 'config']
                }
            ]
        };
    }
}
