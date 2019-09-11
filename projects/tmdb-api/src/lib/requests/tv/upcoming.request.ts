import {IObject} from '../../models/common/js-object.model';
import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieUpcomingRequest extends BaseMovieRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/upcoming`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
