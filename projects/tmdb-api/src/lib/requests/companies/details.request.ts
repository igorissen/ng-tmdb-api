import {IObject} from '../../models/common/js-object.model';
import {BaseCompaniesRequest} from './_base-companies.request';

export class TMDBCompanyDetailsRequest extends BaseCompaniesRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
