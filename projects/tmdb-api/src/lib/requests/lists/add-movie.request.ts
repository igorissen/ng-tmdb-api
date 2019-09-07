import {EHttpMethod} from '../../enums/http-method.enum';
import {ValidationError} from '../../core/errors';
import {BaseListsRequest} from './_base-lists.request';
import {IObject} from '../../models/common/js-object.model';

export class TMDBListsAddMovieRequest extends BaseListsRequest {
  private readonly payload: unknown;
  private readonly queryParams: IObject;

  constructor(id: string, payload: unknown, queryParams?: IObject) {
    super(id);
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

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/add_item`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
