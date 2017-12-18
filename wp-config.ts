import { WindowRef } from './window-ref.service';

export class WpConfig {

  private _domain: string;
  private _apiRoot: string = 'wp-json';
  private _apiNamespace: string = 'wp';
  private _apiVersion: number = 2;
  private _path: string;
  private _fullPath: string;
  private _authHeader: string;
  private _authKey: string;

  private _window: any;

  constructor( private winRef: WindowRef ) { }

  get fullPath() {
    return this._domain + '/' + this._apiRoot + '/' + this._apiNamespace + '/v' + this._apiVersion + '/' + this._path;
  }

  get authHeader() {
    return this._authHeader;
  }
  set authHeader( header: string ) {
    this._authHeader = header;
  }
  set auth_header( header: string ) {
    this._authHeader = header;
  }

  get authKey() {
    return this._authKey;
  }
  set authKey( key: string ) {
    this._authKey = key;
  }
  set auth_key( key: string ) {
    this._authKey = key;
  }

  get domain() {
    return this._domain;
  }
  set domain( domain: string ) {
    this._domain = '//' + domain;
  }

  get apiRoot() {
    return this._apiRoot;
  }
  set apiRoot( root: string ) {
    this._apiRoot = root;
  }
  set api_root( root: string ) {
    this._apiRoot = root;
  }

  get apiNamespace() {
    return this._apiNamespace;
  }
  set apiNamespace( name: string ) {
    this._apiNamespace = name;
  }
  set api_namepace( name: string ) {
    this._apiNamespace = name;
  }

  get apiVersion() {
    return this._apiVersion;
  }
  set apiVersion( version: number ) {
    this._apiVersion = version;
  }
  set api_version( version: number ) {
    this._apiVersion = version;
  }

  get path() {
    return this._path;
  }
  set path( path: string ) {
    this._path = path;
  }

  setConfigFromWindow( config: string ) {
    const windowConfig = this.winRef.nativeWindow[ config ];
    windowConfig.forEach(function(v,i){
      this[i] = v;
    });
  }

}
