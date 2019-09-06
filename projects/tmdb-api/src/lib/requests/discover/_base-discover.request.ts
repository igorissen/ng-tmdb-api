import {BaseRequest} from '../base.request';

export class BaseDiscoverRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/discover';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
