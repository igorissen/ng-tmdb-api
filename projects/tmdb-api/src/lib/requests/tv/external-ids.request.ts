import {BaseTvRequest} from './_base-tv.request';

export class TMDBTvExternalIdsRequest extends BaseTvRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/external_ids`;
  }
}
