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
  TMDBPeopleEndpoint,
  TMDBReviewsEndpoint,
  TMDBSearchEndpoint,
  TMDBTrendingEndpoint,
  TMDBTvEndpoint,
  TMDBTvEpisodesEndpoint,
  TMDBTvSeasonsEndpoint
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
    public trending: TMDBTrendingEndpoint,
    public people: TMDBPeopleEndpoint,
    public reviews: TMDBReviewsEndpoint,
    public search: TMDBSearchEndpoint,
    public tv: TMDBTvEndpoint,
    public tvSeasons: TMDBTvSeasonsEndpoint,
    public tvEpisodes: TMDBTvEpisodesEndpoint
  ) {
  }
}
