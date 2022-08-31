import Button02 from '../commons/buttons/Button02';
import { useState } from 'react';
import TodoWrite from './TodoWrite';
import * as S from './Todo.styles';
import { deleteTodo, updateTodo } from '../../services/todo';

export default function TodoItem({ setData, todoItem: { userId, todo, id, isCompleted } }) {
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(todo);
  const [done, setIsDone] = useState(isCompleted);

  const toggleEdit = () => {
    setIsEdit(prev => !prev);
  };

  const onClickDelete = async () => {
    await deleteTodo(id);
    setData(prev => prev.filter(item => item.id !== id));
  };

  const onClickCompleted = async () => {
    const newTodo = { userId, id, isCompleted: !isCompleted, todo };
    const { data: updatedTodo } = await updateTodo(id, newTodo);
    setIsDone(prev => !prev);
    setData(prev => prev.map(item => (item.id === updatedTodo.id ? newTodo : item)));
  };

  const onClickUpdate = async () => {
    const newTodo = { userId, id, isCompleted, todo: input };
    const { data: updatedTodo } = await updateTodo(id, newTodo);
    setData(prev => prev.map(item => (item.id === updatedTodo.id ? newTodo : item)));
    toggleEdit();
  };

  return (
    <S.Form>
      {isEdit ? (
        <TodoWrite
          type="text"
          defaultValue={todo}
          onChange={event => setInput(event.target.value)}
          onClickUpdate={onClickUpdate}
          isEdit={isEdit}
          toggleEdit={toggleEdit}
          isCompleted={done}
          onClickCheck={() => setIsDone(prev => !prev)}
        />
      ) : (
        <S.Item>
          <span onClick={onClickCompleted} className={done ? 'isCompleted' : ''} />
          <div className="content">{todo}</div>
          <Button02 name="수정" onClick={toggleEdit} />
          <Button02 name="삭제" onClick={onClickDelete} />
        </S.Item>
      )}
    </S.Form>
  );
}
