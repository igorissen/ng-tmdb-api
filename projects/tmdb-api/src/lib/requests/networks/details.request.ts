import {BaseNetworksRequest} from './_base-networks.request';

export class TMDBNetworksDetailsRequest extends BaseNetworksRequest {
  constructor(id: string) {
    super(id);
  }
}
