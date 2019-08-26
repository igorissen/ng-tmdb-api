import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBCollectionDetailsRequest, TMDBCollectionImagesRequest, TMDBCollectionTranslationsRequest} from '../requests/collections';

@Injectable({providedIn: 'root'})
export class TMDBCollectionsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCollectionDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCollectionImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTranslations(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCollectionTranslationsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
