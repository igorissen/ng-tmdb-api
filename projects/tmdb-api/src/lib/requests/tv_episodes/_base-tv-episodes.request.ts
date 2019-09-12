import {BaseRequest} from '../base.request';

export class BaseTvEpisodesRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly id: string;
  private readonly season: string;
  private readonly episode: string;

  constructor(id?: string, season?: string, episode?: string) {
    super();
    this.basePath = '/tv';

    // tslint:disable-next-line:no-unused-expression
    id && (this.id = id);
    // tslint:disable-next-line:no-unused-expression
    season && (this.season = season);
    // tslint:disable-next-line:no-unused-expression
    episode && (this.episode = episode);
  }

  getUriWithPathParameters(): string {
    return this.id && this.season ? `${this.basePath}/${this.id}/season/${this.season}/episode/${this.episode}` : `${this.basePath}/episode/${this.episode}`;
  }
}
