import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TMDBKeywordsDetailsRequest, TMDBKeywordsMoviesRequest} from '../requests/keywords';

@Injectable({providedIn: 'root'})
export class TMDBKeywordsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(keywordId: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBKeywordsDetailsRequest(keywordId))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getMovies(keywordId: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBKeywordsMoviesRequest(keywordId, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
