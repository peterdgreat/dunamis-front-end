import axios from 'axios';
import BASE_URL from '../BaseUrl';

const LOGOUT_SUCCESS = 'dunamis/logout/LOGOUT_SUCCESS';

const initialState = {
  user: {
    id: '',
    username: '',
    email: '',
    password: '',
  },
};

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload,
});

export const logout = async (data) => {
  try {
    const response = await axios.delete(`${BASE_URL}admins/sign_out`, data);
    return { status: response.status, user: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default logoutReducer;
