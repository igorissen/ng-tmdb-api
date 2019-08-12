import {TMDBGenreModel} from './genre.model';
import {TMDBCompanyModel} from './company.model';
import {TMDBCountryModel} from './country.model';
import {TMDBLanguageModel} from './language.model';
import {EMovieStatus} from '../../enums/status.enum';

export interface TMDBMovieModel {
  adult?: boolean;
  backdrop_path?: string | null;
  // TODO don't forget to set property type
  belongs_to_collection?: any;
  budget?: number;
  genres?: TMDBGenreModel[];
  homepage?: string | null;
  id: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: TMDBCompanyModel[];
  production_countries?: TMDBCountryModel[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: TMDBLanguageModel[];
  status?: EMovieStatus;
  tagline?: string | null;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
