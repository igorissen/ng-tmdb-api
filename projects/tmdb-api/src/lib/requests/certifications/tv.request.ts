import {BaseCertificationsRequest} from './_base-certifications.request';

export class TMDBCertificationsTvListRequest extends BaseCertificationsRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/tv/list`;
  }
}
