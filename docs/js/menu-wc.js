'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-tmdb-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgTMDBApiModule.html" data-type="entity-link">NgTMDBApiModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BaseAuthenticationRequest.html" data-type="entity-link">BaseAuthenticationRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCertificationsRequest.html" data-type="entity-link">BaseCertificationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseChangesRequest.html" data-type="entity-link">BaseChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCollectionsRequest.html" data-type="entity-link">BaseCollectionsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCompaniesRequest.html" data-type="entity-link">BaseCompaniesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseConfigurationRequest.html" data-type="entity-link">BaseConfigurationRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseCreditsRequest.html" data-type="entity-link">BaseCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseDiscoverRequest.html" data-type="entity-link">BaseDiscoverRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseFindRequest.html" data-type="entity-link">BaseFindRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseGenresRequest.html" data-type="entity-link">BaseGenresRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseGuestSessionsRequest.html" data-type="entity-link">BaseGuestSessionsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseKeywordsRequest.html" data-type="entity-link">BaseKeywordsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseListsRequest.html" data-type="entity-link">BaseListsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseMovieRequest.html" data-type="entity-link">BaseMovieRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseNetworksRequest.html" data-type="entity-link">BaseNetworksRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BasePeopleRequest.html" data-type="entity-link">BasePeopleRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseRequest.html" data-type="entity-link">BaseRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseReviewsRequest.html" data-type="entity-link">BaseReviewsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseSearchRequest.html" data-type="entity-link">BaseSearchRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTrendingRequest.html" data-type="entity-link">BaseTrendingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTvEpisodeGroupsRequest.html" data-type="entity-link">BaseTvEpisodeGroupsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTvEpisodesRequest.html" data-type="entity-link">BaseTvEpisodesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTvRequest.html" data-type="entity-link">BaseTvRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseTvSeasonsRequest.html" data-type="entity-link">BaseTvSeasonsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationConvertV4SessionRequest.html" data-type="entity-link">TMDBAuthenticationConvertV4SessionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationCreateGuestSessionRequest.html" data-type="entity-link">TMDBAuthenticationCreateGuestSessionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationCreateLoginSessionRequest.html" data-type="entity-link">TMDBAuthenticationCreateLoginSessionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationCreateRequestTokenRequest.html" data-type="entity-link">TMDBAuthenticationCreateRequestTokenRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationCreateSessionRequest.html" data-type="entity-link">TMDBAuthenticationCreateSessionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBAuthenticationDeleteSessionRequest.html" data-type="entity-link">TMDBAuthenticationDeleteSessionRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCertificationsMovieListRequest.html" data-type="entity-link">TMDBCertificationsMovieListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCertificationsTvListRequest.html" data-type="entity-link">TMDBCertificationsTvListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBChangesMovieListRequest.html" data-type="entity-link">TMDBChangesMovieListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBChangesPersonListRequest.html" data-type="entity-link">TMDBChangesPersonListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBChangesTvListRequest.html" data-type="entity-link">TMDBChangesTvListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCollectionDetailsRequest.html" data-type="entity-link">TMDBCollectionDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCollectionImagesRequest.html" data-type="entity-link">TMDBCollectionImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCollectionTranslationsRequest.html" data-type="entity-link">TMDBCollectionTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCompanyAlternativeNamesRequest.html" data-type="entity-link">TMDBCompanyAlternativeNamesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCompanyDetailsRequest.html" data-type="entity-link">TMDBCompanyDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCompanyImagesRequest.html" data-type="entity-link">TMDBCompanyImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationApiConfigurationRequest.html" data-type="entity-link">TMDBConfigurationApiConfigurationRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationCountriesRequest.html" data-type="entity-link">TMDBConfigurationCountriesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationJobsRequest.html" data-type="entity-link">TMDBConfigurationJobsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationLanguagesRequest.html" data-type="entity-link">TMDBConfigurationLanguagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationPrimaryTranslationsRequest.html" data-type="entity-link">TMDBConfigurationPrimaryTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBConfigurationTimezonesRequest.html" data-type="entity-link">TMDBConfigurationTimezonesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBCreditsDetailsRequest.html" data-type="entity-link">TMDBCreditsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBDiscoverMovieRequest.html" data-type="entity-link">TMDBDiscoverMovieRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBDiscoverTvRequest.html" data-type="entity-link">TMDBDiscoverTvRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBFindByIdRequest.html" data-type="entity-link">TMDBFindByIdRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBGenresMovieListRequest.html" data-type="entity-link">TMDBGenresMovieListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBGenresTvListRequest.html" data-type="entity-link">TMDBGenresTvListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBGuestSessionsRatedMoviesRequest.html" data-type="entity-link">TMDBGuestSessionsRatedMoviesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBGuestSessionsRatedTvEpisodesRequest.html" data-type="entity-link">TMDBGuestSessionsRatedTvEpisodesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBGuestSessionsRatedTvShowsRequest.html" data-type="entity-link">TMDBGuestSessionsRatedTvShowsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBKeywordsDetailsRequest.html" data-type="entity-link">TMDBKeywordsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBKeywordsMoviesRequest.html" data-type="entity-link">TMDBKeywordsMoviesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsAddMovieRequest.html" data-type="entity-link">TMDBListsAddMovieRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsClearRequest.html" data-type="entity-link">TMDBListsClearRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsCreateListRequest.html" data-type="entity-link">TMDBListsCreateListRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsDeleteRequest.html" data-type="entity-link">TMDBListsDeleteRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsDetailsRequest.html" data-type="entity-link">TMDBListsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsItemStatusRequest.html" data-type="entity-link">TMDBListsItemStatusRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBListsRemoveMovieRequest.html" data-type="entity-link">TMDBListsRemoveMovieRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieAlternativeTitlesRequest.html" data-type="entity-link">TMDBMovieAlternativeTitlesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieChangesRequest.html" data-type="entity-link">TMDBMovieChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieCreditsRequest.html" data-type="entity-link">TMDBMovieCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieDeleteRatingRequest.html" data-type="entity-link">TMDBMovieDeleteRatingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieDetailsRequest.html" data-type="entity-link">TMDBMovieDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieExternalIdsRequest.html" data-type="entity-link">TMDBMovieExternalIdsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieImagesRequest.html" data-type="entity-link">TMDBMovieImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieKeywordsRequest.html" data-type="entity-link">TMDBMovieKeywordsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieLatestRequest.html" data-type="entity-link">TMDBMovieLatestRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieListsRequest.html" data-type="entity-link">TMDBMovieListsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieNowPlayingRequest.html" data-type="entity-link">TMDBMovieNowPlayingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMoviePopularRequest.html" data-type="entity-link">TMDBMoviePopularRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieRateRequest.html" data-type="entity-link">TMDBMovieRateRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieRecommendationsRequest.html" data-type="entity-link">TMDBMovieRecommendationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieReleaseDatesRequest.html" data-type="entity-link">TMDBMovieReleaseDatesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieReviewsRequest.html" data-type="entity-link">TMDBMovieReviewsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieSimilarRequest.html" data-type="entity-link">TMDBMovieSimilarRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieTopRatedRequest.html" data-type="entity-link">TMDBMovieTopRatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieTranslationsRequest.html" data-type="entity-link">TMDBMovieTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieUpcomingRequest.html" data-type="entity-link">TMDBMovieUpcomingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBMovieVideosRequest.html" data-type="entity-link">TMDBMovieVideosRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBNetworksAlternativeNamesRequest.html" data-type="entity-link">TMDBNetworksAlternativeNamesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBNetworksDetailsRequest.html" data-type="entity-link">TMDBNetworksDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBNetworksImagesRequest.html" data-type="entity-link">TMDBNetworksImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonChangesRequest.html" data-type="entity-link">TMDBPersonChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonCombinedCreditsRequest.html" data-type="entity-link">TMDBPersonCombinedCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonDetailsRequest.html" data-type="entity-link">TMDBPersonDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonExternalIdsRequest.html" data-type="entity-link">TMDBPersonExternalIdsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonImagesRequest.html" data-type="entity-link">TMDBPersonImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonLatestRequest.html" data-type="entity-link">TMDBPersonLatestRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonMovieCreditsRequest.html" data-type="entity-link">TMDBPersonMovieCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonPopularRequest.html" data-type="entity-link">TMDBPersonPopularRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonTaggedImagesRequest.html" data-type="entity-link">TMDBPersonTaggedImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonTranslationsRequest.html" data-type="entity-link">TMDBPersonTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBPersonTvCreditsRequest.html" data-type="entity-link">TMDBPersonTvCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBReviewsDetailsRequest.html" data-type="entity-link">TMDBReviewsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBSearchByTypeRequest.html" data-type="entity-link">TMDBSearchByTypeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTrendingRequest.html" data-type="entity-link">TMDBTrendingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvAccountStatesRequest.html" data-type="entity-link">TMDBTvAccountStatesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvAiringTodayRequest.html" data-type="entity-link">TMDBTvAiringTodayRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvAlternativeTitlesRequest.html" data-type="entity-link">TMDBTvAlternativeTitlesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvChangesRequest.html" data-type="entity-link">TMDBTvChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvContentRatingsRequest.html" data-type="entity-link">TMDBTvContentRatingsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvCreditsRequest.html" data-type="entity-link">TMDBTvCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvDeleteRatingRequest.html" data-type="entity-link">TMDBTvDeleteRatingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvDetailsRequest.html" data-type="entity-link">TMDBTvDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodeGroupsDetailsRequest.html" data-type="entity-link">TMDBTvEpisodeGroupsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodeGroupsRequest.html" data-type="entity-link">TMDBTvEpisodeGroupsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesAccountStatesRequest.html" data-type="entity-link">TMDBTvEpisodesAccountStatesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesChangesRequest.html" data-type="entity-link">TMDBTvEpisodesChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesCreditsRequest.html" data-type="entity-link">TMDBTvEpisodesCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesDeleteRatingRequest.html" data-type="entity-link">TMDBTvEpisodesDeleteRatingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesDetailsRequest.html" data-type="entity-link">TMDBTvEpisodesDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesExternalIdsRequest.html" data-type="entity-link">TMDBTvEpisodesExternalIdsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesImagesRequest.html" data-type="entity-link">TMDBTvEpisodesImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesRateRequest.html" data-type="entity-link">TMDBTvEpisodesRateRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesTranslationsRequest.html" data-type="entity-link">TMDBTvEpisodesTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvEpisodesVideosRequest.html" data-type="entity-link">TMDBTvEpisodesVideosRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvExternalIdsRequest.html" data-type="entity-link">TMDBTvExternalIdsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvImagesRequest.html" data-type="entity-link">TMDBTvImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvKeywordsRequest.html" data-type="entity-link">TMDBTvKeywordsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvLatestRequest.html" data-type="entity-link">TMDBTvLatestRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvListsRequest.html" data-type="entity-link">TMDBTvListsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvNowPlayingRequest.html" data-type="entity-link">TMDBTvNowPlayingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvOnTheAirRequest.html" data-type="entity-link">TMDBTvOnTheAirRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvPopularRequest.html" data-type="entity-link">TMDBTvPopularRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvRateRequest.html" data-type="entity-link">TMDBTvRateRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvRecommendationsRequest.html" data-type="entity-link">TMDBTvRecommendationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvReleaseDatesRequest.html" data-type="entity-link">TMDBTvReleaseDatesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvReviewsRequest.html" data-type="entity-link">TMDBTvReviewsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvScreenedTheatricallyRequest.html" data-type="entity-link">TMDBTvScreenedTheatricallyRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsAccountStatesRequest.html" data-type="entity-link">TMDBTvSeasonsAccountStatesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsChangesRequest.html" data-type="entity-link">TMDBTvSeasonsChangesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsCreditsRequest.html" data-type="entity-link">TMDBTvSeasonsCreditsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsDetailsRequest.html" data-type="entity-link">TMDBTvSeasonsDetailsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsExternalIdsRequest.html" data-type="entity-link">TMDBTvSeasonsExternalIdsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsImagesRequest.html" data-type="entity-link">TMDBTvSeasonsImagesRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSeasonsVideosRequest.html" data-type="entity-link">TMDBTvSeasonsVideosRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvSimilarRequest.html" data-type="entity-link">TMDBTvSimilarRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvTopRatedRequest.html" data-type="entity-link">TMDBTvTopRatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvTranslationsRequest.html" data-type="entity-link">TMDBTvTranslationsRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvUpcomingRequest.html" data-type="entity-link">TMDBTvUpcomingRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/TMDBTvVideosRequest.html" data-type="entity-link">TMDBTvVideosRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationError.html" data-type="entity-link">ValidationError</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TMDBAuthenticationEndpoint.html" data-type="entity-link">TMDBAuthenticationEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBCertificationsEndpoint.html" data-type="entity-link">TMDBCertificationsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBChangesEndpoint.html" data-type="entity-link">TMDBChangesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBClient.html" data-type="entity-link">TMDBClient</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBCollectionsEndpoint.html" data-type="entity-link">TMDBCollectionsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBCompaniesEndpoint.html" data-type="entity-link">TMDBCompaniesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBConfigurationEndpoint.html" data-type="entity-link">TMDBConfigurationEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBCreditsEndpoint.html" data-type="entity-link">TMDBCreditsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBDiscoverEndpoint.html" data-type="entity-link">TMDBDiscoverEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBFindEndpoint.html" data-type="entity-link">TMDBFindEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBGenresEndpoint.html" data-type="entity-link">TMDBGenresEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBGuestSessionsEndpoint.html" data-type="entity-link">TMDBGuestSessionsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBKeywordsEndpoint.html" data-type="entity-link">TMDBKeywordsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBListsEndpoint.html" data-type="entity-link">TMDBListsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBMoviesEndpoint.html" data-type="entity-link">TMDBMoviesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBNetworksEndpoint.html" data-type="entity-link">TMDBNetworksEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBPeopleEndpoint.html" data-type="entity-link">TMDBPeopleEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBRequestHandler.html" data-type="entity-link">TMDBRequestHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBReviewsEndpoint.html" data-type="entity-link">TMDBReviewsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBSearchEndpoint.html" data-type="entity-link">TMDBSearchEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBTrendingEndpoint.html" data-type="entity-link">TMDBTrendingEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBTvEndpoint.html" data-type="entity-link">TMDBTvEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBTvEpisodeGroupsEndpoint.html" data-type="entity-link">TMDBTvEpisodeGroupsEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBTvEpisodesEndpoint.html" data-type="entity-link">TMDBTvEpisodesEndpoint</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TMDBTvSeasonsEndpoint.html" data-type="entity-link">TMDBTvSeasonsEndpoint</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IObject.html" data-type="entity-link">IObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequest.html" data-type="entity-link">IRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRequestHandler.html" data-type="entity-link">IRequestHandler</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITMDBApiModuleConfig.html" data-type="entity-link">ITMDBApiModuleConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});