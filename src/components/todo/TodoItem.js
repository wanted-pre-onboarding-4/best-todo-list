import Button02 from '../commons/buttons/Button02';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { todos } from '../../utils/ApiRoutes';
import TodoWrite from './TodoWrite';
import * as S from './Todo.styles';

export default function TodoItem(props) {
  const access_token = localStorage.getItem('accessToken');
  const [isEdit, setIsEdit] = useState(false);
  const [input, setInput] = useState(props.el.todo);
  const [isCompleted, setIsCompleted] = useState(props.el.isCompleted);

  const toggleEdit = () => {
    setIsEdit(prev => !prev);
  };
  const onClickDelete = async () => {
    await axios
      .delete(`${todos}/${props.el.id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(res => {
        if (res.status === 204) {
          props.getTodos();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onClickUpdate = async () => {
    await axios
      .put(
        `${todos}/${props.el.id}`,
        { todo: input, isCompleted: isCompleted },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          setIsEdit(false);
          props.getTodos();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    onClickUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCompleted]);

  return (
    <S.Form>
      {isEdit ? (
        <TodoWrite
          type="text"
          defaultValue={props.el.todo}
          onChange={event => setInput(event.target.value)}
          onClickUpdate={onClickUpdate}
          isEdit={isEdit}
          toggleEdit={toggleEdit}
          isCompleted={isCompleted}
          onClickCheck={() => setIsCompleted(prev => !prev)}
        />
      ) : (
        <S.Item>
          <span
            onClick={() => setIsCompleted(prev => !prev)}
            className={isCompleted ? 'isCompleted' : ''}
          />
          <div className="content">{props.el.todo}</div>
          <Button02 name="수정" onClick={toggleEdit} />
          <Button02 name="삭제" onClick={onClickDelete} />
        </S.Item>
      )}
    </S.Form>
  );
}
