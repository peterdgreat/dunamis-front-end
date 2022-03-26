import axios from 'axios';

// const ROCKET_SUCCESS = 'space-travellers/rockets/ROCKET_SUCCESS';
const MAKE_POST = 'dunamis/posts/MAKE_POST';
// const LEAVE_ROCKET = 'space-travellers/rockets/LEAVE_ROCKET';
const BASE_URL = 'http://localhost:3000/api/v1/';
const initialState = {
  posts: [

  ],
};
// const setRockets = (payload) => ({
//   type: ROCKET_SUCCESS,
//   payload,
// });

//  const makePost = (payload) => ({
//   type: MAKE_POST,
//   payload,
// });

// export const leaveRocket = (id) => ({
//   type: LEAVE_ROCKET,
//   id,
// });
export const getPost = async (data) => {
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
    case MAKE_POST:
      return {
        ...state,
        posts: action.payload,
      };
    // case BOOK_ROCKET:
    //   return {
    //     ...state,
    //     rockets: state.rockets.map((rocket) => {
    //       if (rocket.id !== action.id) { return rocket; }
    //       return { ...rocket, reserved: true };
    //     }),
    //   };
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
