import {BaseConfigurationRequest} from './_base-configuration.request';

export class TMDBConfigurationCountriesRequest extends BaseConfigurationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/countries`;
  }
}
