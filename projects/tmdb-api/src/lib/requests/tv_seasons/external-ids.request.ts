import {BaseTvSeasonsRequest} from './_base-tv-seasons.request';

export class TMDBTvSeasonsExternalIdsRequest extends BaseTvSeasonsRequest {
  constructor(id: string, season: number) {
    super(id, season);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/external_ids`;
  }
}
