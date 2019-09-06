import {BaseConfigurationRequest} from './_base-configuration.request';

export class TMDBConfigurationTimezonesRequest extends BaseConfigurationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/timezones`;
  }
}
