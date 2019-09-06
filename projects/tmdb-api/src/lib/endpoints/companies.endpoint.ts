import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBCompanyAlternativeNamesRequest, TMDBCompanyDetailsRequest, TMDBCompanyImagesRequest} from '../requests/companies';

@Injectable({providedIn: 'root'})
export class TMDBCompaniesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getAlternativeNames(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyAlternativeNamesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getDetails(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyDetailsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCompanyImagesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
