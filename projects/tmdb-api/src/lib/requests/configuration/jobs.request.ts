import {BaseConfigurationRequest} from './_base-configuration.request';

export class TMDBConfigurationJobsRequest extends BaseConfigurationRequest {
  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/jobs`;
  }
}
