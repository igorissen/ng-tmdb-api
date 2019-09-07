import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBGuestSessionsRatedMoviesRequest,
  TMDBGuestSessionsRatedTvEpisodesRequest,
  TMDBGuestSessionsRatedTvShowsRequest
} from '../requests/guest_sessions';

@Injectable({providedIn: 'root'})
export class TMDBGuestSessionsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getRatedMovies(guestSessionId: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBGuestSessionsRatedMoviesRequest(guestSessionId, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getRatedTv(guestSessionId: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBGuestSessionsRatedTvShowsRequest(guestSessionId, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getRatedTvEpisodes(guestSessionId: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBGuestSessionsRatedTvEpisodesRequest(guestSessionId, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
