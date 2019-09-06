import {BaseCompaniesRequest} from './_base-companies.request';

export class TMDBCompanyDetailsRequest extends BaseCompaniesRequest {
  constructor(id: string) {
    super(id);
  }
}
