import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBChangesMovieListRequest, TMDBChangesPersonListRequest, TMDBChangesTvListRequest} from '../requests/changes';

@Injectable({providedIn: 'root'})
export class TMDBChangesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getMovieChangeList(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBChangesMovieListRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTvChangeList(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBChangesTvListRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getPersonChangeList(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBChangesPersonListRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
