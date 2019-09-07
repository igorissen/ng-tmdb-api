import {BasePeopleRequest} from './_base-people.request';

export class TMDBPersonTranslationsRequest extends BasePeopleRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return `${super.getUriWithPathParameters()}/translations`;
  }
}
