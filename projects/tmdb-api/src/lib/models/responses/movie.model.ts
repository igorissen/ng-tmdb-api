import {TMDBGenre} from './genre.model';
import {TMDBCompany} from './company.model';
import {TMDBCountry} from './country.model';
import {TMDBLanguage} from './language.model';
import {EMovieStatus} from '../../enums/status.enum';

export interface TMDBMovieModel {
  adult?: boolean;
  backdrop_path?: string | null;
  // TODO don't forget to set property type
  belongs_to_collection?: any;
  budget?: number;
  genres?: TMDBGenre[];
  homepage?: string | null;
  id: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: TMDBCompany[];
  production_countries?: TMDBCountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: TMDBLanguage[];
  status?: EMovieStatus;
  tagline?: string | null;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
