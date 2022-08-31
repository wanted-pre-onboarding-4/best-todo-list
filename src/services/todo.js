import axios from 'axios';

const BASE_URL = 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com';

// todo 추가
export const createTodo = async data => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.post(
      `${BASE_URL}/todos`,
      {
        todo: data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getTodos = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

// 수정
export const updateTodo = async (id, data) => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.put(
      `${BASE_URL}/todos/${id}`,
      {
        todo: data.todo,
        isCompleted: data.isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const deleteTodo = async id => {
  const token = localStorage.getItem('token');
  try {
    const res = await axios.delete(`${BASE_URL}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};
