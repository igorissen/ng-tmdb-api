import {IRequest} from '../models/common/request.model';
import {EHttpMethod} from '../enums/http-method.enum';
import {IObject} from '../models/common/js-object.model';

export class BaseRequest implements IRequest {
  constructor() {
  }

  method(): EHttpMethod {
    return EHttpMethod.Get;
  }

  validate(): void {
  }

  getUriWithPathParameters(): string {
    return '';
  }

  getUriQueryParameters(queryParams?: IObject): string {
    let queryString = '';

    if (queryParams) {
      queryString = Object.keys(queryParams).map((key: string) => `${key}=${queryParams[ key ]}`).join('&');
    }

    if (queryString && queryString.length) {
      queryString = '&' + queryString;
    }

    return queryString;
  }

  getPayload(): any {
    return null;
  }
}
