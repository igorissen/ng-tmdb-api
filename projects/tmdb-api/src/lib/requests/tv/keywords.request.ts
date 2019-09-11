import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvKeywordsRequest extends BaseTvRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/keywords`;
  }
}
