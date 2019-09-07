import {Injectable} from '@angular/core';
import {TMDBRequestHandler} from '../core/request-handler';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {TMDBNetworksAlternativeNamesRequest, TMDBNetworksDetailsRequest, TMDBNetworksImagesRequest} from '../requests/networks';

@Injectable({providedIn: 'root'})
export class TMDBNetworksEndpoint {
  constructor(private requestHandler: TMDBRequestHandler) {
  }

  public getAlternativeNames(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBNetworksAlternativeNamesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getDetails(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBNetworksDetailsRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }

  public getImages(id: string): Observable<unknown> {
    return this.requestHandler
      .execute(new TMDBNetworksImagesRequest(id))
      .pipe(map((response: HttpResponse<unknown>) => response.body));
  }
}
