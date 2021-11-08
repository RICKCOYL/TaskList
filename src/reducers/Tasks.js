import { CREATE_BOOK, REMOVE_BOOK } from '../components/Actions';

const initialState = [
  {
    id: Math.floor(Math.random() * 1111).toString(),
    title: 'Grocery SHopping',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'GYM Workout',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'Random Chore',
  },
];

const Tasks = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((Book) => Book.id !== payload);
    default:
      return state;
  }
};

export default Tasks;
