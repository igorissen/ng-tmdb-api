import {BaseRequest} from '../base.request';

export class BaseTvEpisodeGroupsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly id: string;

  constructor(id: string) {
    super();
    this.basePath = '/tv/episode_group';
    this.id = id;
  }

  getUriWithPathParameters(): string {
    return `${this.basePath}/${this.id}`;
  }
}
