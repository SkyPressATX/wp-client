import { Injectable, Inject } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import { WpConfig } from './wp-config';

@Injectable()
export class WpConfigService {

	private _config: any;

	constructor( private winRef: WindowRefService, @Inject( 'localObj' ) private localObj?: any ){ }

	public getConfig( config?: any ): WpConfig {
		const _wpConfig = new WpConfig;

		if( 'undefined' === typeof config && 'undefined' !== typeof this.localObj ) config = this.localObj;
		if( 'string' === typeof config ) this._config = this.winRef.nativeWindow[ config ];
		if( ! this._config ) this._config = config;

		if( this._config ) {
			for ( let key of Object.keys( this._config ) ) {
				_wpConfig[ key ] = this._config[ key ];
			}
		}
		return _wpConfig;
	}

}
