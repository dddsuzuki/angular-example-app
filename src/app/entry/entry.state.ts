export interface EntryState {
  statuses: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
  };
  nameStatus: string;
  nameError: string;
  emailStatus: string;
  emailError: string;
  addressStatus: string;
  addressError: string;
}

export const initialState: EntryState = {
  statuses: {
    firstName: 'none',
    lastName: 'none',
    email: 'none',
    address: 'none',
  },
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  },
  nameStatus: 'none',
  nameError: '',
  emailStatus: 'none',
  emailError: '',
  addressStatus: 'none',
  addressError: '',
};
