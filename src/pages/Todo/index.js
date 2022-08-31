import { useEffect, useState } from 'react';
import { todos } from '../../utils/ApiRoutes';
import axios from 'axios';
import TodoWrite from '../../components/todo/TodoWrite';
import TodoItem from '../../components/todo/TodoItem';
import * as S from '../../components/todo/Todo.styles';

export default function TodoPage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const access_token = localStorage.getItem('accessToken');

  useEffect(() => {
    getTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTodos = async () => {
    await axios
      .get(`${todos}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onClickAdd = async () => {
    await axios
      .post(
        `${todos}`,
        { todo: input },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(res => {
        setData(res.data);
        getTodos();
        setInput('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <S.Main>
      <section className="todo">
        <h1>투두 리스트</h1>

        <TodoWrite
          placeholder="할 일을 추가하세요"
          type="text"
          onChange={event => setInput(event.target.value)}
          value={input}
          onClickAdd={onClickAdd}
          isEdit={false}
        />
      </section>
      <section className="todo_list">
        <S.CheckInfo>
          <div className="info">
            <div></div>
            <span>Done</span>
          </div>
          <div className="info">
            <div className="doing"></div>
            <span>Doing</span>
          </div>
        </S.CheckInfo>
        {data.length > 0 &&
          data.map(el => (
            <div key={el.id}>
              <TodoItem el={el} getTodos={getTodos} />
            </div>
          ))}
      </section>
    </S.Main>
  );
}
