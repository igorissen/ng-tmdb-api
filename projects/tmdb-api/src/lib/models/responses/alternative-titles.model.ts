import {TMDBTitleModel} from './title.model';

export interface TMDBAlternativeTitlesModel {
  id: number;
  titles?: TMDBTitleModel[];
}
