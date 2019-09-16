import {IObject} from '../../models/common/js-object.model';
import {BaseTvEpisodeGroupsRequest} from './_base-tv-episode-groups.request';

export class TMDBTvEpisodeGroupsDetailsRequest extends BaseTvEpisodeGroupsRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
