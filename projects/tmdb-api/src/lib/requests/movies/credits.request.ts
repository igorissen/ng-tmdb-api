import {BaseMovieRequest} from './base-movie.request';
import {IObject} from '../../models/common/js-object.model';

export class TMDBMovieCreditsRequest extends BaseMovieRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/credits`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
