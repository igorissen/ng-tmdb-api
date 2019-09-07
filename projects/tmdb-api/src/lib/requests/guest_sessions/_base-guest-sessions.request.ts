import {BaseRequest} from '../base.request';

export class BaseGuestSessionsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly guestSessionId: string;

  constructor(guestSessionId?: string) {
    super();
    this.basePath = '/movie';
    if (guestSessionId) {
      this.guestSessionId = guestSessionId;
    }
  }

  getUriWithPathParameters(): string {
    return this.guestSessionId ? `${this.basePath}/${this.guestSessionId}` : this.basePath;
  }
}
