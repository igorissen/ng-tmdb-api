import {TMDBCastModel} from './cast.model';
import {TMDBCrewModel} from './crew.model';

export interface TMDBCreditsModel {
  id: number;
  cast?: TMDBCastModel[];
  crew?: TMDBCrewModel[];
}
