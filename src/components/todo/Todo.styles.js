import styled from 'styled-components';
import { Color } from '../../styles/Colors';

export const Main = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 80px 0px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  section {
    width: 400px;
    h1 {
      margin-bottom: 20px;
    }
  }
  section.todo {
    padding: 40px 0px;
  }
  section.todo_list {
    > div {
      width: 100%;
    }
  }
`;
export const CheckInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  margin-bottom: 30px;
  .info {
    display: flex;
    align-items: center;
    grid-gap: 5px;
    & div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: ${Color.GREEN_MAIN};
    }
    .doing {
      background-color: ${Color.ORANGE_POINT};
    }
  }
`;

export const Write = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-gap: 10px;
  span {
    width: 12px;
    height: 12px;
    background-color: ${Color.GREEN_MAIN};
    cursor: pointer;
    border-radius: 50%;
  }
  .isCompleted {
    background-color: ${Color.ORANGE_POINT};
  }
  input {
    width: 280px;
  }
  button {
    width: 50px;
    height: 40px;
  }
`;

export const Form = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  grid-gap: 10px;
  span {
    width: 12px;
    height: 12px;
    background-color: ${Color.ORANGE_POINT};
    cursor: pointer;
    border-radius: 50%;
  }
  .isCompleted {
    background-color: ${Color.GREEN_MAIN};
  }
  .content {
    width: 280px;
    padding: 10px 15px;
    border-bottom: 2px solid ${Color.GREEN_MAIN};
  }
  button {
    width: 50px;
    height: 40px;
  }
`;
