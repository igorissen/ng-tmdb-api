import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {TMDBMovieDetailsRequest} from '../requests/movies/details.request';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBMovieModel} from '../models/responses/movie.model';
import {Observable} from 'rxjs';
import {TMDBAlternativeTitlesModel} from '../models/responses/alternative-titles.model';
import {TMDBMovieAlternativeTitlesRequest} from '../requests/movies/alternative-titles.request';
import {TMDBMovieChangesRequest} from '../requests/movies/changes.request';
import {TMDBChangesModel} from '../models/responses/changes.model';
import {TMDBCreditsModel} from '../models/responses/credits.model';
import {TMDBMovieCreditsRequest} from '../requests/movies/credits.request';

@Injectable({providedIn: 'root'})
export class TMDBMoviesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<TMDBMovieModel> {
    return this.requestHandler
      .execute(new TMDBMovieDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBMovieModel>) => response.body));
  }

  public getAlternativeTitles(id: string, queryParams?: IObject): Observable<TMDBAlternativeTitlesModel> {
    return this.requestHandler
      .execute(new TMDBMovieAlternativeTitlesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBAlternativeTitlesModel>) => response.body));
  }

  public getChanges(id: string, queryParams?: IObject): Observable<TMDBChangesModel> {
    return this.requestHandler
      .execute(new TMDBMovieChangesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBChangesModel>) => response.body));
  }

  public getCredits(id: string, queryParams?: IObject): Observable<TMDBCreditsModel> {
    return this.requestHandler
      .execute(new TMDBMovieCreditsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBCreditsModel>) => response.body));
  }
}
