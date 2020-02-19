import { Entry } from './../core/models/entry.model';

export interface AdminState {
  entries: Entry[];
}

export const initialState: AdminState = {
  entries: null,
};
