import {IRequestHandler} from '../models/common/request-handler.model';
import {IRequest} from '../models/common/request.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {ITMDBApiModuleConfig} from '../models/common/module-configuration.model';
import {TMDB_API_MODULE_CONFIG} from '../injection-tokens';

@Injectable({providedIn: 'root'})
export class TMDBRequestHandler implements IRequestHandler {
  constructor(@Inject(TMDB_API_MODULE_CONFIG) private config: ITMDBApiModuleConfig, private httpClient: HttpClient) {
  }

  buildUrl(request: IRequest): string {
    return `${this.config.apiBaseUrl}/${this.config.apiVersion}${request.getUriWithPathParameters()}?api_key=${this.config.apiKey}${request.getUriQueryParameters()}`;
  }

  buildHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }

  execute(request: IRequest): Observable<any> {
    return this.httpClient.request(request.method(), this.buildUrl(request), {
      body: request.getPayload(),
      headers: this.buildHeaders(),
      observe: 'response'
    });
  }
}
