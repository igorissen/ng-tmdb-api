import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBTvEpisodesAccountStatesRequest,
  TMDBTvEpisodesChangesRequest,
  TMDBTvEpisodesCreditsRequest,
  TMDBTvEpisodesDeleteRatingRequest,
  TMDBTvEpisodesDetailsRequest,
  TMDBTvEpisodesExternalIdsRequest,
  TMDBTvEpisodesImagesRequest,
  TMDBTvEpisodesRateRequest,
  TMDBTvEpisodesTranslationsRequest,
  TMDBTvEpisodesVideosRequest
} from '../requests/tv_episodes';

@Injectable({providedIn: 'root'})
export class TMDBTvEpisodesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesDetailsRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getAccountStates(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesAccountStatesRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getChanges(episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesChangesRequest(episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCredits(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesCreditsRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getExternalIds(id: string, season: string, episode: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesExternalIdsRequest(id, season, episode))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTranslations(id: string, season: string, episode: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesTranslationsRequest(id, season, episode))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesImagesRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getVideos(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesVideosRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public deleteRating(id: string, season: string, episode: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesDeleteRatingRequest(id, season, episode, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public rate(id: string, season: string, episode: string, payload: unknown, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodesRateRequest(id, season, episode, payload, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
