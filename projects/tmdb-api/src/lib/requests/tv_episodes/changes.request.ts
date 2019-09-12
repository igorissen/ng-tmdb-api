import {IObject} from '../../models/common/js-object.model';
import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesChangesRequest extends BaseTvEpisodesRequest {
  private readonly queryParams: IObject;

  constructor(episode: string, queryParams?: IObject) {
    super(null, null, episode);
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
