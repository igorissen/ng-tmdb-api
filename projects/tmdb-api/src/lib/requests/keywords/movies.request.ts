import {IObject} from '../../models/common/js-object.model';
import {BaseKeywordsRequest} from './_base-keywords.request';

export class TMDBKeywordsMoviesRequest extends BaseKeywordsRequest {
  private readonly queryParams: IObject;

  constructor(keywordId: string, queryParams?: IObject) {
    super(keywordId);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/movies`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
