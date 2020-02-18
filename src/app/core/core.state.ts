import { Entry } from './models/entry.model';

export interface CoreState {
  entry: Entry;
}

export const initialState: CoreState = {
  entry: null,
};
