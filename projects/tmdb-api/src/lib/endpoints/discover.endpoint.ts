import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {IObject} from '../models/common/js-object.model';
import {TMDBDiscoverMovieRequest, TMDBDiscoverTvRequest} from '../requests/discover';

@Injectable({providedIn: 'root'})
export class TMDBDiscoverEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getMovies(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBDiscoverMovieRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTv(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBDiscoverTvRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
