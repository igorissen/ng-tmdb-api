import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {IObject} from '../models/common/js-object.model';
import {TMDBMovieDetailsRequest} from '../requests/movies/detail.request';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBMovieModel} from '../models/responses/movie.model';

@Injectable({providedIn: 'root'})
export class TMDBMoviesEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getDetails(id: string, queryParams?: IObject) {
    return this.requestHandler
      .execute(new TMDBMovieDetailsRequest(id, queryParams))
      .pipe(map((response: HttpResponse<TMDBMovieModel>) => response.body));
  }
}
