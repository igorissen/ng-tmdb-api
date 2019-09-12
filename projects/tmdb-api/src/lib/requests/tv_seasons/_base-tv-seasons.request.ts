import {BaseRequest} from '../base.request';

export class BaseTvSeasonsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly id: string;
  private readonly season: number;

  constructor(id: string, season: number) {
    super();
    this.basePath = '/tv';
    this.id = id;
    this.season = season;
  }

  getUriWithPathParameters(): string {
    return `${this.basePath}/${this.id}/season/${this.season}`;
  }
}
