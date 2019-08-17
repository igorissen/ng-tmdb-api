import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBSystemWideConfigurationRequest} from '../requests/configuration/system-wide-configuration.request';

@Injectable({providedIn: 'root'})
export class TMDBConfigurationEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getSystemWideConfiguration(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSystemWideConfigurationRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
