import {BaseAuthenticationRequest} from './_base-authentication.request';

export class TMDBAuthenticationCreateRequestTokenRequest extends BaseAuthenticationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/token/new`;
  }
}
