import {BaseConfigurationRequest} from './_base-configuration.request';

export class TMDBConfigurationLanguagesRequest extends BaseConfigurationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/languages`;
  }
}
