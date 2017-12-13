import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCalls } from './api-calls';
import { WindowRef } from './window-ref.service';

@Injectable()
export class WpClientService {

    public window: any;
    public namespaces: any = {};

  constructor( @Inject('wpConfig') private wpConfig: any, private winRef: WindowRef, private http: HttpClient ) {
      this.window = this.winRef.nativeWindow;
  }

  public namespace( name: string ): any {
    if( ! name ){
        name = this.wpConfig.api_namespace;
    }
    if( ! this.namespaces[ name ] ){
        this.namespaces[ name ] = new ApiCalls( this.wpConfig, name, this.http );
    }
    return this.namespaces[ name ];
  }

}
