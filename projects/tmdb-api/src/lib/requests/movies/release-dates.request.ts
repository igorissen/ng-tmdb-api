import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieReleaseDatesRequest extends BaseMovieRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/release_dates`;
  }
}
