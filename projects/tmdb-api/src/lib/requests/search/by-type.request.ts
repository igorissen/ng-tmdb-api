import {IObject} from '../../models/common/js-object.model';
import {BaseSearchRequest} from './_base-search.request';

export class TMDBSearchByTypeRequest extends BaseSearchRequest {
  private readonly queryParams: IObject;

  constructor(type: string, queryParams?: IObject) {
    super(type);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return super.getUriWithPathParameters();
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
