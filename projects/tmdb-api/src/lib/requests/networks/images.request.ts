import {BaseNetworksRequest} from './_base-networks.request';

export class TMDBNetworksImagesRequest extends BaseNetworksRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/images`;
  }
}
