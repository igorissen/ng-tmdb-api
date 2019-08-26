import {IObject} from '../../models/common/js-object.model';
import {BaseCollectionsRequest} from './_base-collections.request';

export class TMDBCollectionImagesRequest extends BaseCollectionsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/images`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
