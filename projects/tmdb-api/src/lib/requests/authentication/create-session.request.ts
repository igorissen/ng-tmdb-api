import {BaseAuthenticationRequest} from './_base-authentication.request';
import {EHttpMethod} from '../../enums/http-method.enum';

export class TMDBAuthenticationCreateSessionRequest extends BaseAuthenticationRequest {
  constructor() {
    super();
  }

  method(): EHttpMethod {
    return EHttpMethod.Post;
  }

  getPayload(): any {
    return super.getPayload();
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/session/new`;
  }
}
