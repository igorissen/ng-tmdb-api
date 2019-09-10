import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBSearchByTypeRequest} from '../requests/search';
import {ESearchType} from '../enums/search-type.enum';

@Injectable({providedIn: 'root'})
export class TMDBSearchEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public companies(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Company))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public collections(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Collections))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public keywords(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Keyword))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public movies(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Movie))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public people(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Person))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public tv(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Tv))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public multi(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBSearchByTypeRequest(ESearchType.Multi))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
