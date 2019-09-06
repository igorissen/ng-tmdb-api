import {BaseCreditsRequest} from './_base-credits.request';

export class TMDBCreditsDetailsRequest extends BaseCreditsRequest {
  constructor(id: string) {
    super(id);
  }
}
