import { CREATE_TASK, REMOVE_TASK } from '../components/Actions';

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
    case CREATE_TASK:
      return [...state, payload];
    case REMOVE_TASK:
      return state.filter((Book) => Book.id !== payload);
    default:
      return state;
  }
};

export default Tasks;
