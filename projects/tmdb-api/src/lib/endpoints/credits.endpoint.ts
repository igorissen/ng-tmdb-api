import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBCreditsDetailsRequest} from '../requests/credits';

@Injectable({providedIn: 'root'})
export class TMDBCreditsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCreditsDetailsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
