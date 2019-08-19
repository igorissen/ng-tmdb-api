import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieTranslationsRequest extends BaseMovieRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/translations`;
  }
}
