import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {IObject} from '../models/common/js-object.model';
import {
  TMDBListsAddMovieRequest,
  TMDBListsClearRequest,
  TMDBListsCreateListRequest,
  TMDBListsDeleteRequest,
  TMDBListsDetailsRequest,
  TMDBListsItemStatusRequest,
  TMDBListsRemoveMovieRequest
} from '../requests/lists';

@Injectable({providedIn: 'root'})
export class TMDBListsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public checkItemStatus(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsItemStatusRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public createList(payload: unknown, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsCreateListRequest(payload, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public addItem(id: string, payload: unknown, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsAddMovieRequest(id, payload, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public removeItem(id: string, payload: unknown, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsRemoveMovieRequest(id, payload, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public clearList(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsClearRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public deleteList(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBListsDeleteRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
