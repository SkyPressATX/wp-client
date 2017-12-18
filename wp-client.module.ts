import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';
import { WindowRefService } from './window-ref.service';
import { WpConfigService } from './wp-config.service';

export function wpConfigFactory( configService: WpConfigService, config?: any ){
    return configService.getConfig( config );
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
                { provide: 'localObj', useValue: config },
                WindowRefService,
                WpConfigService,
                WpClientService,
                { provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
            ]
        };
    }
}
