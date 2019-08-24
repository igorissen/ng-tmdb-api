import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBCertificationsMovieListRequest, TMDBCertificationsTvListRequest} from '../requests/certifications';

@Injectable({providedIn: 'root'})
export class TMDBCertificationsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getMovieCertifications(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCertificationsMovieListRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTvCertifications(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBCertificationsTvListRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
