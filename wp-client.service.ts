import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiCalls } from './api-calls';

@Injectable()
export class WpClientService {

  public namespaces: any = {};

  constructor( @Inject('wpConfig') private wpConfig: any, private http: HttpClient ) {
      this.wpConfig = this.ensureConfig();
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

  private ensureConfig(){
      	const defaultConfig: any = {
      		api_root: '/',
      		api_namespace: 'wp/v2',
      		auth_key: '',
      		auth_header: ''
      	};
      	const customConfig: any = this.wpConfig || {};
      	return Object.assign( defaultConfig, customConfig );
  }
}
