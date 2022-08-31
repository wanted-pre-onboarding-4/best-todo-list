import Input01 from '../commons/inputs/Input01';
import Button01 from '../commons/buttons/Button01';
import * as S from './Todo.styles';

export default function TodoWrite(props) {
  return (
    <S.Write>
      <Input01
        id="todo"
        placeholder={props.isEdit ? '할 일을 수정하세요' : '할 일을 추가하세요'}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
      />
      <Button01
        name={props.isEdit ? '수정' : '추가'}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickAdd}
      />
      {props.isEdit && <Button01 name="취소" onClick={props.toggleEdit} />}
    </S.Write>
  );
}
