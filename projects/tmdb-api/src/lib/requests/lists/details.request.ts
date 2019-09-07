import {IObject} from '../../models/common/js-object.model';
import {BaseListsRequest} from './_base-lists.request';

export class TMDBListsDetailsRequest extends BaseListsRequest {
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
