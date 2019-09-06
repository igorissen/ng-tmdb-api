import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBCompanyAlternativeNamesRequest, TMDBCompanyDetailsRequest, TMDBCompanyImagesRequest} from '../requests/companies';
import {IObject} from '../models/common/js-object.model';

@Injectable({providedIn: 'root'})
export class TMDBCompaniesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getCompanyAlternativeNames(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyAlternativeNamesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCompanyDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCompanyImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
