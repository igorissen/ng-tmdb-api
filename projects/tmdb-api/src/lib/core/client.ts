import {Injectable} from '@angular/core';
import {TMDBAuthenticationEndpoint, TMDBCertificationsEndpoint, TMDBConfigurationEndpoint, TMDBMoviesEndpoint} from '../endpoints';

@Injectable({providedIn: 'root'})
export class TMDBClient {
  constructor(
    public configuration: TMDBConfigurationEndpoint,
    public movies: TMDBMoviesEndpoint,
    public authentication: TMDBAuthenticationEndpoint,
    public certifications: TMDBCertificationsEndpoint
  ) {
  }
}
