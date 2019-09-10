import {BaseReviewsRequest} from './_base-reviews.request';

export class TMDBReviewsDetailsRequest extends BaseReviewsRequest {
  constructor(id: string) {
    super(id);
  }

  getUriWithPathParameters(): string {
    return super.getUriWithPathParameters();
  }
}
