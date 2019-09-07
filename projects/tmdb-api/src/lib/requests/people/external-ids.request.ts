import {BasePeopleRequest} from './_base-people.request';

export class TMDBPersonExternalIdsRequest extends BasePeopleRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/external_ids`;
  }
}
