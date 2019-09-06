import {BaseCompaniesRequest} from './_base-companies.request';

export class TMDBCompanyAlternativeNamesRequest extends BaseCompaniesRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/alternative_names`;
  }
}
