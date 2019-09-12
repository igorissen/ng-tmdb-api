import {IObject} from '../../models/common/js-object.model';
import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesVideosRequest extends BaseTvEpisodesRequest {
  private readonly queryParams: IObject;

  constructor(id: string, season: string, episode: string, queryParams?: IObject) {
    super(id, season);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/videos`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
