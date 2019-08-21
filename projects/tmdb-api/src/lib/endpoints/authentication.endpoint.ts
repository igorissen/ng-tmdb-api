import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBAuthenticationCreateGuestSessionRequest, TMDBAuthenticationCreateRequestTokenRequest} from '../requests/authentication';

@Injectable({providedIn: 'root'})
export class TMDBAuthenticationEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public createGuestSession(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationCreateGuestSessionRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public createRequestToken(): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationCreateRequestTokenRequest())
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
