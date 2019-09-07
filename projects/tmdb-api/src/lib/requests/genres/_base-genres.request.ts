import {BaseRequest} from '../base.request';

export class BaseGenresRequest extends BaseRequest {
  private readonly basePath: string;

  constructor() {
    super();
    this.basePath = '/genre';
  }

  getUriWithPathParameters(): string {
    return this.basePath;
  }
}
