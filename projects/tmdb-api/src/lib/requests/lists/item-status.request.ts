import {IObject} from '../../models/common/js-object.model';
import {BaseListsRequest} from './_base-lists.request';

export class TMDBListsItemStatusRequest extends BaseListsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/item_status`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
