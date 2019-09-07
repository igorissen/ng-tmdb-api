import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBTrendingRequest} from '../requests/trending';

@Injectable({providedIn: 'root'})
export class TMDBTrendingEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getTrending(mediaType: string, timeWindow: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTrendingRequest(mediaType, timeWindow))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
