import {IObject} from '../../models/common/js-object.model';
import {BaseTvSeasonsRequest} from './_base-tv-seasons.request';

export class TMDBTvSeasonsChangesRequest extends BaseTvSeasonsRequest {
  private readonly queryParams: IObject;

  constructor(season: string, queryParams?: IObject) {
    super(null, season);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/changes`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
