import {BaseRequest} from '../base.request';

export class BaseTrendingRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/trending';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
