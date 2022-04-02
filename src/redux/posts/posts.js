import axios from 'axios';

// const MAKE_POST = 'dunamis/posts/MAKE_POST';
const SET_CATEGORIES_FILTER = 'SET_CATEGORIES_FILTER';
const WEDDING = 'dunamis/posts/WEDDING';
const PORTRAIT = 'dunamis/posts/PORTRAIT';
const POST_SUCCESS = 'dunamis/posts/POST_SUCCESS';
// const LEAVE_ROCKET = 'space-travellers/rockets/LEAVE_ROCKET';
const BASE_URL = 'http://localhost:3001/api/v1/';
const initialState = {
  posts: [

  ],
};
export const postSuccess = (payload) => ({
  type: POST_SUCCESS,
  payload,
});

// const fetchPost = (payload) => ({
//   type: MAKE_POST,
//   payload,
// });

export const setCategoriessFilter = (payload) => (
  {
    type: SET_CATEGORIES_FILTER,
    payload,
  }
);

export const getPost = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}posts`);
  console.log(response.data);
  dispatch(postSuccess(response.data));
};
export const wedding = (payload) => ({
  type: WEDDING,
  payload,
});
export const portrait = (payload) => ({
  type: PORTRAIT,
  payload,
});

export const makePost = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}posts/create`, data);
    console.log(response);
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
    case WEDDING:
      return {
        ...state,
        posts: action.payload.filter((post) => post.category.toLowerCase().includes('weddings')),
      };
    case PORTRAIT:
      return {
        ...state,
        posts: action.payload.filter((post) => post.category.toLowerCase().includes('portraits')),
      };
    case SET_CATEGORIES_FILTER:
      return {
        ...state,
        posts: action.filter,
      };
    // case LEAVE_ROCKET:
    //   return {
    //     ...state,
    //     rockets: state.rockets.map((rocket) => {
    //       if (rocket.id !== action.id) { return rocket; }
    //       return { ...rocket, reserved: false };
    //     }),
    //   };
    default:
      return state;
  }
};

export default postsReducer;
