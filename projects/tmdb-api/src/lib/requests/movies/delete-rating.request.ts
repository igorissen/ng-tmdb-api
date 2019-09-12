import {IObject} from '../../models/common/js-object.model';
import {EHttpMethod} from '../../enums/http-method.enum';
import {BaseMovieRequest} from './_base-movie.request';

export class TMDBMovieDeleteRatingRequest extends BaseMovieRequest {
  private readonly queryParams: IObject;

  constructor(id: string, queryParams?: IObject) {
    super(id);
    if (queryParams) {
      this.queryParams = queryParams;
    }
  }

  method(): EHttpMethod {
    return EHttpMethod.Delete;
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/rating`;
  }

  getUriQueryParameters(): string {
    return super.getUriQueryParameters(this.queryParams);
  }
}
