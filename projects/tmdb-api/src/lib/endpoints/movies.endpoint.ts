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
  TMDBMovieImagesRequest,
  TMDBMovieKeywordsRequest,
  TMDBMovieLatestRequest,
  TMDBMovieListsRequest,
  TMDBMovieNowPlayingRequest,
  TMDBMoviePopularRequest,
  TMDBMovieRecommendationsRequest,
  TMDBMovieReleaseDatesRequest,
  TMDBMovieReviewsRequest,
  TMDBMovieTopRatedRequest,
  TMDBMovieTranslationsRequest,
  TMDBMovieUpcomingRequest,
  TMDBMovieVideosRequest
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

  public getImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getKeywords(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieKeywordsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getReleaseDates(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieReleaseDatesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getVideos(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieVideosRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTranslations(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieTranslationsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getRecommendations(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieRecommendationsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getSimilar(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieRecommendationsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getReviews(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieReviewsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getLists(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieListsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getLatest(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieLatestRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getNowPlaying(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieNowPlayingRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getPopular(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMoviePopularRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTopRated(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieTopRatedRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getUpcoming(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBMovieUpcomingRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
