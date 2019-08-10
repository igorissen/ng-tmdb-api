import {EHttpMethod} from '../../enums/http-method.enum';
import {IObject} from './js-object.model';

export interface IRequest {
  method?(): EHttpMethod;

  validate?(): void;

  getUriWithPathParameters?(): string;

  getUriQueryParameters?(queryParams?: IObject): string;

  getPayload?(): any;
}
