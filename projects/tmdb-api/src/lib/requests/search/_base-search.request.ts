import {BaseRequest} from '../base.request';

export class BaseSearchRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly type: string;

  constructor(type?: string) {
    super();
    this.basePath = '/search';
    if (type) {
      this.type = type;
    }
  }

  getUriWithPathParameters(): string {
    return this.type ? `${this.basePath}/${this.type}` : this.basePath;
  }
}
