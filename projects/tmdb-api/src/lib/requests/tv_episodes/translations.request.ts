import {BaseTvEpisodesRequest} from './_base-tv-episodes.request';

export class TMDBTvEpisodesTranslationsRequest extends BaseTvEpisodesRequest {
  constructor(id: string, season: string, episode: string) {
    super(id, season, episode);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/translations`;
  }
}
