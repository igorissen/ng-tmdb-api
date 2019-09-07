import {IObject} from '../../models/common/js-object.model';
import {BasePeopleRequest} from './_base-people.request';

export class TMDBPersonPopularRequest extends BasePeopleRequest {
  private readonly queryParams: IObject;

  constructor(queryParams?: IObject) {
    super();
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/popular`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
