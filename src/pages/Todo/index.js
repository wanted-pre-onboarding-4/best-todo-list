import { useEffect, useState } from 'react';
import TodoWrite from '../../components/todo/TodoWrite';
import TodoItem from '../../components/todo/TodoItem';
import * as S from '../../components/todo/Todo.styles';
import { createTodo, getTodos } from '../../services/todo';

export default function TodoPage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const getTodoList = async () => {
      const { data } = await getTodos();
      setData(data);
    };
    getTodoList();
  }, []);

  const onClickAdd = async () => {
    const { data: createdData } = await createTodo(input);
    setData(prev => [...prev, createdData]);
    setInput('');
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
          data.map(todoItem => (
            <div key={todoItem.id}>
              <TodoItem setData={setData} todoItem={todoItem} getTodos={getTodos} />
            </div>
          ))}
      </section>
    </S.Main>
  );
}
