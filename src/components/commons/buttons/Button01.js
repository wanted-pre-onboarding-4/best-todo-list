import styled from 'styled-components';
import { Color } from '../../../styles/Colors';

const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  background-color: ${Color.GREEN_MAIN};
  color: ${Color.WHITE};
  /* :disabled {
    cursor: default;
    background-color: ${Color.GRAY_3};
  } */
  :hover {
    transform: scale(1.05);
    transition: all 0.1s ease-in-out;
    background-color: #2fad62;
  }
`;

export default function Button01(props) {
  return (
    <Button onChange={props.onClick} disabled={props.disabled} onClick={props.onClick}>
      {props.name}
    </Button>
  );
}
