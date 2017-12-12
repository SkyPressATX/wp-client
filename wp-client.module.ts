import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/** Services **/
import { WpClientService } from './wp-client.service';
import { WpAuthService } from './wp-auth.service';

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
                {provide: 'wpClient', useClass: WpClientService },
                {provide: 'wpConfig', useValue: config },
                {provide: HTTP_INTERCEPTORS, useClass: WpAuthService, multi: true }
            ]
        };
    }
}