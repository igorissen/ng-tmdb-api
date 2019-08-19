import {IObject} from '../../models/common/js-object.model';
import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieSimilarRequest extends BaseMovieRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/similar`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
