import {BaseRequest} from '../base.request';

export class BaseConfigurationRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/configuration';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
