import {BaseRequest} from '../base.request';

export class BaseTvSeasonsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly id: string;
  private readonly season: string;

  constructor(id?: string, season?: string) {
    super();
    this.basePath = '/tv';

    // tslint:disable-next-line:no-unused-expression
    id && (this.id = id);
    // tslint:disable-next-line:no-unused-expression
    season && (this.season = season);
  }

  getUriWithPathParameters(): string {
    return this.id ? `${this.basePath}/${this.id}/season/${this.season}` : `${this.basePath}/season/${this.season}`;
  }
}
