import {IObject} from '../../models/common/js-object.model';
import {BaseRequest} from '../base.request';

export class TMDBMovieDetailsRequest extends BaseRequest {
  private readonly id: string;
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super();
    this.id = id;

    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `/movie/${this.id}`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
