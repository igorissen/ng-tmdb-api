import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TMDBReviewsDetailsRequest} from '../requests/reviews';

@Injectable({providedIn: 'root'})
export class TMDBReviewsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBReviewsDetailsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
