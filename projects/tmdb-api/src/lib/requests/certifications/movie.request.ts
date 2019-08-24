import {BaseCertificationsRequest} from './_base-certifications.request';

export class TMDBCertificationsMovieListRequest extends BaseCertificationsRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/movie/list`;
  }
}
