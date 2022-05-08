import axios from 'axios';
import BASE_URL from '../BaseUrl';

const ADMIN_SUCCESS = 'dunamis/admin/ADMIN_SUCCESS';

const initialState = {
};

export const adminSuccess = (payload) => ({
  type: ADMIN_SUCCESS,
  payload,
});

export const getAdmin = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}admin`);
  dispatch(adminSuccess(response.data));
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_SUCCESS:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
