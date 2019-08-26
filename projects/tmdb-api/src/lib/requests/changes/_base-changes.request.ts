import {BaseRequest} from '../base.request';

export class BaseChangesRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/changes';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
