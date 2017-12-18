import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WpConfig } from './wp-config';
import { WpConfigService } from './wp-config.service';
import { ApiCalls } from './api-calls';

@Injectable()
export class WpClientService {

  constructor( private http: HttpClient, private wpConfig: WpConfigService ) { }

  public namespace( name?: string ): ApiCalls {
      const config = this.wpConfig.getConfig();
      if( 'undefined' !== typeof name ) config.apiNamespace = name;
      return new ApiCalls( config, this.http );
  }

}
