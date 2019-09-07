import {IObject} from '../../models/common/js-object.model';
import {BaseGuestSessionsRequest} from './_base-guest-sessions.request';

export class TMDBGuestSessionsRatedTvShowsRequest extends BaseGuestSessionsRequest {
  private readonly queryParams: IObject;

  constructor(guestSessionId: string, queryParams?: IObject) {
    super(guestSessionId);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/rated/tv`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
