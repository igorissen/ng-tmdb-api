import {BaseNetworksRequest} from './_base-networks.request';

export class TMDBNetworksAlternativeNamesRequest extends BaseNetworksRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/alternative_names`;
  }
}
