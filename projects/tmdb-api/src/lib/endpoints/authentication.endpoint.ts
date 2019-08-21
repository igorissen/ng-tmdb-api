import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {
  TMDBAuthenticationConvertV4SessionRequest,
  TMDBAuthenticationCreateGuestSessionRequest,
  TMDBAuthenticationCreateLoginSessionRequest,
  TMDBAuthenticationCreateRequestTokenRequest,
  TMDBAuthenticationCreateSessionRequest,
  TMDBAuthenticationDeleteSessionRequest
} from '../requests/authentication';

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

  public createSession(payload?: unknown): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationCreateSessionRequest(payload))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public createSessionWithLogin(payload?: unknown): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationCreateLoginSessionRequest(payload))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public convertV4Session(payload?: unknown): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationConvertV4SessionRequest(payload))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public deleteSession(payload?: unknown): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBAuthenticationDeleteSessionRequest(payload))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
