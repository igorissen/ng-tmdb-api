import {BaseTrendingRequest} from './_base-trending.request';

export class TMDBTrendingRequest extends BaseTrendingRequest {
  private readonly mediaType: string;
  private readonly timeWindow: string;

  constructor(mediaType: string, timeWindow: string) {
    super();
    this.mediaType = mediaType;
    this.timeWindow = timeWindow;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/${this.mediaType}/${this.timeWindow}`;
  }
}
