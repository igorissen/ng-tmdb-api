import {IObject} from '../../models/common/js-object.model';
import {BaseFindRequest} from './_base-find.request';

export class TMDBFindByIdRequest extends BaseFindRequest {
  private readonly queryParams: IObject;

  constructor(externalId: string, queryParams?: IObject) {
    super(externalId);
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
