import {IObject} from '../../models/common/js-object.model';
import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvSimilarRequest extends BaseTvRequest {
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
