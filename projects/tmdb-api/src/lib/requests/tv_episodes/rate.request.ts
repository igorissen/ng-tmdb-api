import {IObject} from '../../models/common/js-object.model';
import {EHttpMethod} from '../../enums/http-method.enum';
import {ValidationError} from '../../core/errors';
import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesRateRequest extends BaseTvEpisodesRequest {
  private readonly queryParams: IObject;
  private readonly payload: unknown;

  constructor(id: string, season: string, episode: string, payload: unknown, queryParams?: IObject) {
    super(id, season, episode);
    this.payload = payload;
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Post;
  }

  validate(): void {
    if (!this.payload) {
      throw new ValidationError('Missing payload object');
    }
  }

  getPayload(): any {
    return this.payload;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/rating`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
