import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const createTodo = async data => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const res = await axios.post(
      `${BASE_URL}/todos`,
      {
        todo: data,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getTodos = async () => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const res = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const updateTodo = async (id, data) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const res = await axios.put(
      `${BASE_URL}/todos/${id}`,
      {
        todo: data.todo,
        isCompleted: data.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deleteTodo = async id => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const res = await axios.delete(`${BASE_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
