import {Injectable} from '@angular/core';
import {
  TMDBAuthenticationEndpoint,
  TMDBCertificationsEndpoint,
  TMDBChangesEndpoint,
  TMDBCollectionsEndpoint,
  TMDBCompaniesEndpoint,
  TMDBConfigurationEndpoint,
  TMDBCreditsEndpoint,
  TMDBDiscoverEndpoint,
  TMDBFindEndpoint,
  TMDBGenresEndpoint,
  TMDBGuestSessionsEndpoint,
  TMDBKeywordsEndpoint,
  TMDBListsEndpoint,
  TMDBMoviesEndpoint,
  TMDBNetworksEndpoint,
  TMDBTrendingEndpoint
} from '../endpoints';

@Injectable({providedIn: 'root'})
export class TMDBClient {
  constructor(
    public configuration: TMDBConfigurationEndpoint,
    public movies: TMDBMoviesEndpoint,
    public authentication: TMDBAuthenticationEndpoint,
    public certifications: TMDBCertificationsEndpoint,
    public changes: TMDBChangesEndpoint,
    public collections: TMDBCollectionsEndpoint,
    public companies: TMDBCompaniesEndpoint,
    public credits: TMDBCreditsEndpoint,
    public discover: TMDBDiscoverEndpoint,
    public find: TMDBFindEndpoint,
    public genres: TMDBGenresEndpoint,
    public guestSessions: TMDBGuestSessionsEndpoint,
    public keywords: TMDBKeywordsEndpoint,
    public lists: TMDBListsEndpoint,
    public networks: TMDBNetworksEndpoint,
    public trending: TMDBTrendingEndpoint
  ) {
  }
}
