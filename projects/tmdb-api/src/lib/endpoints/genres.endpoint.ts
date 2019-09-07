import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {IObject} from '../models/common/js-object.model';
import {TMDBGenresMovieListRequest, TMDBGenresTvListRequest} from '../requests/genres';

@Injectable({providedIn: 'root'})
export class TMDBGenresEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getMovieList(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBGenresMovieListRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTvList(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBGenresTvListRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
