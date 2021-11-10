import { CREATE_TASK, REMOVE_TASK} from '../components/Actions';

const createTask = (book) => ({
  type: CREATE_TASK,
  payload: book,
});

const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});



export { createTask, removeTask };
