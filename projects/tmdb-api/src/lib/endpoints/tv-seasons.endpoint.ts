import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBTvSeasonsAccountStatesRequest,
  TMDBTvSeasonsChangesRequest,
  TMDBTvSeasonsCreditsRequest,
  TMDBTvSeasonsDetailsRequest,
  TMDBTvSeasonsExternalIdsRequest,
  TMDBTvSeasonsImagesRequest,
  TMDBTvSeasonsVideosRequest
} from '../requests/tv_seasons';

@Injectable({providedIn: 'root'})
export class TMDBTvSeasonsEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsDetailsRequest(id, season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getAccountStates(id: string, season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsAccountStatesRequest(id, season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getChanges(season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsChangesRequest(season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCredits(id: string, season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsCreditsRequest(id, season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getExternalIds(id: string, season: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsExternalIdsRequest(id, season))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string, season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsImagesRequest(id, season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getVideos(id: string, season: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvSeasonsVideosRequest(id, season, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
