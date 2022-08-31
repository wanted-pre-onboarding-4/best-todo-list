import styled from 'styled-components';
import { Color } from '../../../styles/Colors';

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 2px solid ${Color.GREEN_MAIN};
  color: ${Color.GREEN_MAIN};
  :disabled {
    cursor: default;
    background-color: ${Color.GRAY_3};
  }
`;

export default function Button02(props) {
  return (
    <Button onChange={props.onClick} disabled={props.disabled} onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
