import {IObject} from '../../models/common/js-object.model';
import {BaseGenresRequest} from './_base-genres.request';

export class TMDBGenresTvListRequest extends BaseGenresRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/tv/list`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
