import {BaseCompaniesRequest} from './_base-companies.request';

export class TMDBCompanyImagesRequest extends BaseCompaniesRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/images`;
  }
}
