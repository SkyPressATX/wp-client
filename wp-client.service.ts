import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpConfig } from './wp-config';
import { ApiCalls } from './api-calls';

@Injectable()
export class WpClientService {

  constructor() { }

  public namespace( name?: string ): any {
    if( name && name !== this.wpConfig.apiNamespace ) this.wpConfig.apiNamespace = name;


    // if( ! name ){
    //     name = this.wpConfig.apiNamespace;
    // }
    // if( ! this.namespaces[ name ] ){
    //     this.namespaces[ name ] = new ApiCalls( name, this.http );
    // }
    // return this.namespaces[ name ];
  }

}
