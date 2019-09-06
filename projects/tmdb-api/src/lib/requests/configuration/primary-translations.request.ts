import {BaseConfigurationRequest} from './_base-configuration.request';

export class TMDBConfigurationPrimaryTranslationsRequest extends BaseConfigurationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/primary_translations`;
  }
}
