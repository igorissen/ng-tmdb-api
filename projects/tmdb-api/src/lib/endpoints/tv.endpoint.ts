import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBTvAiringTodayRequest,
  TMDBTvAlternativeTitlesRequest,
  TMDBTvChangesRequest,
  TMDBTvContentRatingsRequest,
  TMDBTvCreditsRequest,
  TMDBTvDeleteRatingRequest,
  TMDBTvDetailsRequest,
  TMDBTvEpisodeGroupsRequest,
  TMDBTvExternalIdsRequest,
  TMDBTvImagesRequest,
  TMDBTvKeywordsRequest,
  TMDBTvLatestRequest,
  TMDBTvOnTheAirRequest,
  TMDBTvPopularRequest,
  TMDBTvRateRequest,
  TMDBTvRecommendationsRequest,
  TMDBTvReviewsRequest,
  TMDBTvScreenedTheatricallyRequest,
  TMDBTvTopRatedRequest,
  TMDBTvTranslationsRequest,
  TMDBTvVideosRequest
} from '../requests/tv';

@Injectable({providedIn: 'root'})
export class TMDBTvEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getAlternativeTitles(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvAlternativeTitlesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getChanges(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvChangesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCredits(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getExternalIds(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvExternalIdsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getKeywords(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvKeywordsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getVideos(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvVideosRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTranslations(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvTranslationsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getScreenedTheatrically(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvScreenedTheatricallyRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getRecommendations(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvRecommendationsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getEpisodeGroups(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvEpisodeGroupsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getContentRatings(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvContentRatingsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getSimilar(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvRecommendationsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getReviews(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvReviewsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public deleteRating(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvDeleteRatingRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public rate(id: string, payload: unknown, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvRateRequest(id, payload, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getLatest(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvLatestRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getPopular(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvPopularRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTopRated(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvTopRatedRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getAiringToday(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvAiringTodayRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getOnTheAir(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBTvOnTheAirRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
