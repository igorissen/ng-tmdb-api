import {BaseAuthenticationRequest} from './_base-authentication.request';
import {EHttpMethod} from '../../enums/http-method.enum';
import {ValidationError} from '../../core/errors';

export class TMDBAuthenticationDeleteSessionRequest extends BaseAuthenticationRequest {
  private readonly payload: unknown;

  constructor(payload: unknown) {
    super();
    this.payload = payload;
  }

  method(): EHttpMethod {
    return EHttpMethod.Delete;
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
    return `${super.getUriWithPathParameters()}/session`;
  }
}
