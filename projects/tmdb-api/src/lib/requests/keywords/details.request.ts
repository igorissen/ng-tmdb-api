import {BaseKeywordsRequest} from './_base-keywords.request';

export class TMDBKeywordsDetailsRequest extends BaseKeywordsRequest {
  constructor(keywordId: string) {
    super(keywordId);
  }
}
