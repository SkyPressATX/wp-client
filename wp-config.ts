export class WpConfig {

  private _apiHost: string;
  private _apiRoot: string = 'wp-json';
  private _apiNamespace: string = 'wp';
  private _apiVersion: number = 2;
  private _uri: string;
  private _fullPath: string;
  private _authHeader: string;
  private _authKey: string;

  get fullPath() {
    this._fullPath = '/' + this._apiRoot + '/' + this._apiNamespace + '/v' + this._apiVersion + '/' + this._uri;
    if( 'undefined' !== typeof this._apiHost ) this._fullPath = this._apiHost + this._fullPath;
    return this._fullPath;
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

  get apiHost() {
    return this._apiHost;
  }
  set apiHost( host: string ) {
    this._apiHost = host;
  }
  set api_host( host: string ) {
    this._apiHost = host;
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

  get uri() {
    return this._uri;
  }
  set uri( uri: string ) {
    this._uri = uri;
  }

}
