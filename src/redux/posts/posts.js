import axios from 'axios';
import BASE_URL from '../BaseUrl';

const POST_SUCCESS = 'dunamis/posts/POST_SUCCESS';
const DELETE_SUCCESS = 'dunamis/posts/DELETE_SUCCESS';
const initialState = {
  posts: [

  ],
};
export const postSuccess = (payload) => ({
  type: POST_SUCCESS,
  payload,
});

export const deleteSuccess = (payload) => ({
  type: DELETE_SUCCESS,
  payload,
});

export const getPost = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}posts`);
  dispatch(postSuccess(response.data));
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}posts/${id}/destroy`);
    return { status: response.status, post: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};
export const makePost = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}posts/create`, data);
    return { status: response.status, post: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
