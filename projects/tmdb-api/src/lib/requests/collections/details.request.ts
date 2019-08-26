import {IObject} from '../../models/common/js-object.model';
import {BaseCollectionsRequest} from './_base-collections.request';

export class TMDBCollectionDetailsRequest extends BaseCollectionsRequest {
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
