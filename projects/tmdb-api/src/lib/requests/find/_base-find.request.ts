import {BaseRequest} from '../base.request';

export class BaseFindRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly externalId: string;

  constructor(externalId?: string) {
    super();
    this.basePath = '/find';
    if (externalId) {
      this.externalId = externalId;
    }
  }

  getUriWithPathParameters(): string {
    return this.externalId ? `${this.basePath}/${this.externalId}` : this.basePath;
  }
}
