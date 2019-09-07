import {EHttpMethod} from '../../enums/http-method.enum';
import {ValidationError} from '../../core/errors';
import {BaseListsRequest} from './_base-lists.request';
import {IObject} from '../../models/common/js-object.model';

export class TMDBListsCreateListRequest extends BaseListsRequest {
  private readonly payload: unknown;
  private readonly queryParams: IObject;

  constructor(payload: unknown, queryParams?: IObject) {
    super();
    this.payload = payload;
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Post;
  }

  validate(): void {
    if (!this.payload) {
      throw new ValidationError('Missing payload object');
    }
  }

  getPayload(): any {
    return this.payload;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
