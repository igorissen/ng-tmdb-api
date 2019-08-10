import {BaseRequest} from '../base.request';

export class TMDBSystemWideConfigurationRequest extends BaseRequest {
  constructor() {
    super();
  }

  public getUriWithPathParameters(): string {
    return '/configuration';
  }
}
