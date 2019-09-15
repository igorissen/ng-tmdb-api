import { IRequestHandler } from '../models/common/request-handler.model';
import { IRequest } from '../models/common/request.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { ITMDBApiModuleConfig } from '../models/common/module-configuration.model';
import { TMDB_API_MODULE_CONFIG } from '../injection-tokens';

@Injectable({ providedIn: 'root' })
/**
 * TMDBRequestHandler class which implement RequestHandler interface
 */
export class TMDBRequestHandler implements IRequestHandler {
  /**
   * @param config instance of TMDB API configuration module
   * @param httpClient instance of HttpClient
   */
  constructor(
    @Inject(TMDB_API_MODULE_CONFIG) private config: ITMDBApiModuleConfig,
    private httpClient: HttpClient
  ) {}

  /**
   * Create request URL from all parameters
   *
   * @param request instance of a request
   * @returns request URL as string
   */
  buildUrl(request: IRequest): string {
    return `${this.config.apiBaseUrl}/${
      this.config.apiVersion
    }${request.getUriWithPathParameters()}?api_key=${
      this.config.apiKey
    }${request.getUriQueryParameters()}`;
  }

  /**
   * Create an instance of HttpHeaders for the request
   *
   * @returns an instance of HttpHeaders
   */
  buildHeaders(): HttpHeaders {
    return new HttpHeaders({});
  }

  /**
   * Execute a request
   *
   * @param request instance of a request
   * @returns An observable
   */
  execute(request: IRequest): Observable<any> {
    return this.httpClient.request(request.method(), this.buildUrl(request), {
      body: request.getPayload(),
      headers: this.buildHeaders(),
      observe: 'response'
    });
  }
}
