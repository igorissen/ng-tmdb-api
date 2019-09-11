import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvTranslationsRequest extends BaseTvRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/translations`;
  }
}
