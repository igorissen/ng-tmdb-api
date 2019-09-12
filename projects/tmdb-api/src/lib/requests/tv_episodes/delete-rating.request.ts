import {IObject} from '../../models/common/js-object.model';
import {EHttpMethod} from '../../enums/http-method.enum';
import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesDeleteRatingRequest extends BaseTvEpisodesRequest {
  private readonly queryParams: IObject;

  constructor(id: string, season: string, episode: string, queryParams?: IObject) {
    super(id, season, episode);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Delete;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/rating`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
