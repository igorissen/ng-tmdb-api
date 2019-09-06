import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {
  TMDBConfigurationApiConfigurationRequest,
  TMDBConfigurationCountriesRequest,
  TMDBConfigurationJobsRequest,
  TMDBConfigurationLanguagesRequest,
  TMDBConfigurationPrimaryTranslationsRequest,
  TMDBConfigurationTimezonesRequest
} from '../requests/configuration';

@Injectable({providedIn: 'root'})
export class TMDBConfigurationEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getApiConfiguration(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationApiConfigurationRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCountries(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationCountriesRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getJobs(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationJobsRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getLanguages(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationLanguagesRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getPrimaryLanguages(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationPrimaryTranslationsRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTimezones(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBConfigurationTimezonesRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
