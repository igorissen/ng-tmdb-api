import {BaseRequest} from '../base.request';

export class BaseReviewsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly id: string;

  constructor(id?: string) {
    super();
    this.basePath = '/review';
    if (id) {
      this.id = id;
    }
  }

  getUriWithPathParameters(): string {
    return this.id ? `${this.basePath}/${this.id}` : this.basePath;
  }
}
