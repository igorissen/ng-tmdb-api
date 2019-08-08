import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
import {IRequest} from './request.model';

export interface IRequestHandler {
  validate?(request: IRequest): void;

  buildUrl?(request: IRequest): string;

  buildHeaders?(): HttpHeaders;

  buildPayload?(request: IRequest): any;

  execute(request: IRequest): Observable<any>;
}
