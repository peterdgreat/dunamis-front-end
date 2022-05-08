import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import postsReducer from './posts/posts';
import adminReducer from './admin/admin';

const reducer = combineReducers({
  posts: postsReducer,
  admin: adminReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
