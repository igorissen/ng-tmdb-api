import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TMDBFindByIdRequest} from '../requests/find';

@Injectable({providedIn: 'root'})
export class TMDBFindEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public byId(externalId: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBFindByIdRequest(externalId, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
