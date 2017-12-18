import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WpConfigService } from './wp-config.service';
import { WpConfig } from './wp-config';

@Injectable()
export class WpAuthService implements HttpInterceptor {

  private config: WpConfig;

  constructor( private wpConfig: WpConfigService ) {
      this.config = this.wpConfig.getConfig();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {
      console.log( this.config );
      /** If we don't have any headers to set, move along **/
      if( 'undefined' === typeof this.config.authHeader || 'undefined' === typeof this.config.authKey ) return next.handle( req );
      /** Clone current `req` and set our headers **/
      const clonedReq = req.clone({
          headers: req.headers.set( this.config.authHeader, this.config.authKey )
      });
      /** return clonded `req` to the next handler **/
      return next.handle( clonedReq );
  }
}
