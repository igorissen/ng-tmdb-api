import {BaseDiscoverRequest} from './_base-discover.request';
import {IObject} from '../../models/common/js-object.model';

export class TMDBDiscoverMovieRequest extends BaseDiscoverRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/movie`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
