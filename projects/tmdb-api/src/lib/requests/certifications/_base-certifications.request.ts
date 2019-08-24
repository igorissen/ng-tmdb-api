import {BaseRequest} from '../base.request';

export class BaseCertificationsRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/certification';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
