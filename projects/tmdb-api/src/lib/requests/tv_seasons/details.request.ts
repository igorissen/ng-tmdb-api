import {IObject} from '../../models/common/js-object.model';
import {BaseTvSeasonsRequest} from './_base-tv-seasons.request';

export class TMDBTvSeasonsDetailsRequest extends BaseTvSeasonsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, season: string, queryParams?: IObject) {
    super(id, season);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return super.getUriWithPathParameters();
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
