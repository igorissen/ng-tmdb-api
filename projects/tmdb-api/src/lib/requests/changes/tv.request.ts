import {IObject} from '../../models/common/js-object.model';
import {BaseChangesRequest} from './_base-changes.request';

export class TMDBChangesTvListRequest extends BaseChangesRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `/tv${super.getUriWithPathParameters()}`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
