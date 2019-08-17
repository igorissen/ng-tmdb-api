import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBMovieAlternativeTitlesRequest,
  TMDBMovieChangesRequest,
  TMDBMovieCreditsRequest,
  TMDBMovieDetailsRequest,
  TMDBMovieExternalIdsRequest,
  TMDBMovieImagesRequest
} from '../requests/movies';

@Injectable({providedIn: 'root'})
export class TMDBMoviesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getAlternativeTitles(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieAlternativeTitlesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getChanges(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieChangesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCredits(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getExternalIds(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieExternalIdsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieImagesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
