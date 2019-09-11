import {IObject} from '../../models/common/js-object.model';
import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvLatestRequest extends BaseTvRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/latest`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
