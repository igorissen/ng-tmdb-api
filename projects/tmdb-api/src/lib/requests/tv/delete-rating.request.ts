import {IObject} from '../../models/common/js-object.model';
import {BaseTvRequest} from './_base-tv.request';
import {EHttpMethod} from '../../enums/http-method.enum';

export class TMDBTvDeleteRatingRequest extends BaseTvRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Delete;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/rating`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
