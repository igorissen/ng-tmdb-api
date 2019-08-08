import {EHttpMethod} from '../../enums/http-method.enum';

export interface IRequest {
  method(): EHttpMethod;

  validate?(): void;

  getUriWithPathParameters?(): string;

  getUriQueryParameters?(): string;

  getPayload?(): any;
}
