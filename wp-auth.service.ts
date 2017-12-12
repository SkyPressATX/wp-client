import { Injectable, Inject } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WpAuthService implements HttpInterceptor {

  constructor( @Inject('wpConfig') private wpConfig: any ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {
      /** If we don't have any headers to set, move along **/
      if( ! this.wpConfig ) return next.handle( req );
      if( ! this.wpConfig.auth_header || ! this.wpConfig.auth_key ) return next.handle( req );
      /** Clone current `req` and set our headers **/
      const clonedReq = req.clone({
          headers: req.headers.set( this.wpConfig.auth_header, this.wpConfig.auth_key )
      });
      /** return clonded `req` to the next handler **/
      return next.handle( clonedReq );
  }
}
