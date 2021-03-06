import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieExternalIdsRequest extends BaseMovieRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/external_ids`;
  }
}
