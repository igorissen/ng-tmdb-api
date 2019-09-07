import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  TMDBPersonChangesRequest,
  TMDBPersonCombinedCreditsRequest,
  TMDBPersonDetailsRequest,
  TMDBPersonExternalIdsRequest,
  TMDBPersonImagesRequest,
  TMDBPersonLatestRequest,
  TMDBPersonMovieCreditsRequest,
  TMDBPersonPopularRequest,
  TMDBPersonTaggedImagesRequest,
  TMDBPersonTranslationsRequest,
  TMDBPersonTvCreditsRequest
} from '../requests/people';

@Injectable({providedIn: 'root'})
export class TMDBPeopleEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getCombinedCredits(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonCombinedCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getMovieCredits(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonMovieCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTvCredits(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonTvCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getChanges(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonChangesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getExternalIds(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonExternalIdsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTaggedImages(id: string, queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonTaggedImagesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getTranslations(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonTranslationsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getLatest(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonLatestRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getPopular(queryParams?: IObject): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBPersonPopularRequest(queryParams))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
