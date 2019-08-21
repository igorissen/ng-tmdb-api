import {BaseAuthenticationRequest} from './_base-authentication.request';

export class TMDBAuthenticationCreateGuestSessionRequest extends BaseAuthenticationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/guest_session/new`;
  }
}
