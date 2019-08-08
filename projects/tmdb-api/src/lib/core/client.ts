import {Injectable} from '@angular/core';
import {TMDBConfigurationEndpoint} from '../endpoints/configuration.endpoint';

@Injectable({providedIn: 'root'})
export class TMDBClient {
  constructor(public configuration: TMDBConfigurationEndpoint) {
  }
}
