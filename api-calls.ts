import { HttpParams, HttpClient } from '@angular/common/http';
import { WpConfig } from './wp-config';

export class ApiCalls {

  constructor( private wpConfig: WpConfig, private http: HttpClient ){ }

	public get( path: string, params?: any ): any {
        return this.httpRequest( 'get',  path, { params: params } );
	};

  public post( path: string, params?: any ): any {
      return this.httpRequest( 'post',  path, { body: params } );
  }

  public put( path: string, params?: any ): any {
      return this.httpRequest( 'put',  path, { body: params } );
  }

  public patch( path: string, params?: any ): any {
      return this.httpRequest( 'patch', path, { body: params } );
  }

  public delete( path: string ): any {
      return this.httpRequest( 'delete', path );
  }

  public head( path: string ){
      return this.httpRequest( 'head', path );
  }

  public options( path: string ): any {
      return this.httpRequest( 'options', path );
  }

  private httpRequest( method: string, path: string, params?: any ): any {
      return this.http.request( method, this.woConfig.fullPath, params );
  }
}
