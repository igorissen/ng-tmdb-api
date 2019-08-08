import {IRequest} from '../../models/common/request.model';
import {EHttpMethod} from '../../enums/http-method.enum';

export class TMDBSystemWideConfigurationRequest implements IRequest {
  constructor() {
  }

  public method(): EHttpMethod {
    return EHttpMethod.Get;
  }

  public getUriWithPathParameters(): string {
    return '/configuration';
  }

  public getUriQueryParameters(): string {
    return '';
  }
}
