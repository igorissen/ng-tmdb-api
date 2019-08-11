import {BaseConfigurationRequest} from './base-configuration.request';

export class TMDBSystemWideConfigurationRequest extends BaseConfigurationRequest {
  constructor() {
    super();
  }

  getUriWithPathParameters(): string {
    return super.getUriWithPathParameters();
  }
}
