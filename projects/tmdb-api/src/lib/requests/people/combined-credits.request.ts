import {IObject} from '../../models/common/js-object.model';
import {BasePeopleRequest} from './_base-people.request';

export class TMDBPersonCombinedCreditsRequest extends BasePeopleRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/combined_credits`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
