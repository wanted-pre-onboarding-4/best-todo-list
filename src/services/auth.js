import axios from 'axios';

const BASE_URL = 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com';

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signin`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const join = async (email, password) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/signup`, {
      email,
      password,
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
