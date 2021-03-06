import {IObject} from '../../models/common/js-object.model';
import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieDetailsRequest extends BaseMovieRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
