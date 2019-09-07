import {BaseRequest} from '../base.request';

export class BaseKeywordsRequest extends BaseRequest {
  private readonly basePath: string;
  private readonly keywordId: string;

  constructor(keywordId?: string) {
    super();
    this.basePath = '/keyword';
    if (keywordId) {
      this.keywordId = keywordId;
    }
  }

  getUriWithPathParameters(): string {
    return this.keywordId ? `${this.basePath}/${this.keywordId}` : this.basePath;
  }
}
