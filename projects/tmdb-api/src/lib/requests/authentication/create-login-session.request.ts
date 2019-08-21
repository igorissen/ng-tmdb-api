import {BaseAuthenticationRequest} from './_base-authentication.request';
import {EHttpMethod} from '../../enums/http-method.enum';

export class TMDBAuthenticationCreateLoginSessionRequest extends BaseAuthenticationRequest {
  private readonly payload: unknown;

  constructor(payload: unknown) {
    super();
    this.payload = payload;
  }

  method(): EHttpMethod {
    return EHttpMethod.Post;
  }

  getPayload(): any {
    return this.payload;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/token/validate_with_login`;
  }
}
