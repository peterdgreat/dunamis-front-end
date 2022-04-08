import axios from 'axios';
import BASE_URL from '../BaseUrl';

const LOGIN_SUCCESS = 'dunamis/login/LOGIN_SUCCESS';

const initialState = {
  user: {
    id: '',
    username: '',
    email: '',
    password: '',
  },
};

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}admins/sign_in`, data);
    return { status: response.status, user: response.data };
  } catch (error) {
    return { status: error.response.status, ...error.response.data };
  }
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
