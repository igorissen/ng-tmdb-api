import {EHttpMethod} from '../../enums/http-method.enum';
import {ValidationError} from '../../core/errors';
import {BaseListsRequest} from './_base-lists.request';
import {IObject} from '../../models/common/js-object.model';

export class TMDBListsClearRequest extends BaseListsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Post;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/clear`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
