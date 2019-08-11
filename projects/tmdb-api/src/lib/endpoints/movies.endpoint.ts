import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {TMDBMovieDetailsRequest} from '../requests/movies/details.request';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBMovieModel} from '../models/responses/movie.model';
import {Observable} from 'rxjs';
import {TMDBAlternativeTitles} from '../models/responses/alternative-titles.model';
import {TMDBMovieAlternativeTitlesRequest} from '../requests/movies/alternative-titles.request';

@Injectable({providedIn: 'root'})
export class TMDBMoviesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject): Observable<TMDBMovieModel> {
    return this.requestHandler
      .execute(new TMDBMovieDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBMovieModel>) => response.body));
  }

  public getAlternativeTitles(id: string, queryParams?: IObject): Observable<TMDBAlternativeTitles> {
    return this.requestHandler
      .execute(new TMDBMovieAlternativeTitlesRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBAlternativeTitles>) => response.body));
  }
}
