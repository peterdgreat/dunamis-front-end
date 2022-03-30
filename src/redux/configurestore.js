import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import postsReducer from './posts/posts';

const reducer = combineReducers({
  posts: postsReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
