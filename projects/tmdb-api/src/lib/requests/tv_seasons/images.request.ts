import {IObject} from '../../models/common/js-object.model';
import {BaseTvSeasonsRequest} from './_base-tv-seasons.request';

export class TMDBTvSeasonsImagesRequest extends BaseTvSeasonsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, season: number, queryParams?: IObject) {
    super(id, season);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/images`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
