import {IObject} from '../../models/common/js-object.model';
import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesCreditsRequest extends BaseTvEpisodesRequest {
  private readonly queryParams: IObject;

  constructor(id: string, season: string, episode: string, queryParams?: IObject) {
    super(id, season, episode);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/credits`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
