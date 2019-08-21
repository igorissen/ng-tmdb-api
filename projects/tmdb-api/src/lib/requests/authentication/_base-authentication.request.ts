import {BaseRequest} from '../base.request';

export class BaseAuthenticationRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/authentication';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
