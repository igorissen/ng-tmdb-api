import {TMDBPropertyChangeActionModel} from './property-change-action.model';

export interface TMDBPropertyChangeModel {
  key: string;
  items?: TMDBPropertyChangeActionModel[];
}
