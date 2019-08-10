import {Injectable} from '@angular/core';
import {TMDBConfigurationEndpoint} from '../endpoints/configuration.endpoint';
import {TMDBMoviesEndpoint} from '../endpoints/movies.endpoint';

@Injectable({providedIn: 'root'})
export class TMDBClient {
  constructor(public configuration: TMDBConfigurationEndpoint, public movies: TMDBMoviesEndpoint) {
  }
}
