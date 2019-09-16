import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvReleaseDatesRequest extends BaseTvRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/release_dates`;
  }
}
