import {TMDBPropertyChangeAction} from './property-change-action.model';

export interface TMDBPropertyChange {
  key: string;
  items?: TMDBPropertyChangeAction[];
}
