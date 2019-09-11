import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvScreenedTheatricallyRequest extends BaseTvRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/screened_theatrically`;
  }
}
