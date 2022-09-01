import styled from 'styled-components';
import { useState, useContext } from 'react';
import Input01 from '../../components/commons/inputs/Input01';
import Button01 from '../../components/commons/buttons/Button01';
import { UserValidation } from '../../utils/UserValidation';
import AuthContext from '../../store/auth_context';

export default function LoginPage() {
  const { onLoginAndJoin } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [loginInputs, setLoginInputs] = useState({ email: '', password: '' });
  const [registerInputs, setRegisterInputs] = useState({ newEmail: '', newPassword: '' });

  const handleLoginMode = () => {
    setIsLogin(true);
    setIsRegister(false);
  };

  const handleRegisterMode = () => {
    setIsLogin(false);
    setIsRegister(true);
  };
  const onChangeInput = event => {
    setLoginInputs({
      ...loginInputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeNewInput = event => {
    setRegisterInputs({
      ...registerInputs,
      [event.target.id]: event.target.value,
    });
    console.log({
      ...registerInputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickJoin = async () => {
    onLoginAndJoin('join', registerInputs.newEmail, registerInputs.newPassword);
    setRegisterInputs({ newEmail: '', newPassword: '' });
  };

  const onClickLogin = async () => {
    onLoginAndJoin('login', loginInputs.email, loginInputs.password);
    setLoginInputs({ email: '', password: '' });
  };

  return (
    <Main>
      {isLogin && (
        <section className="login">
          <Title>로그인</Title>
          <Form>
            <Input01
              placeholder="@를 포함한 email"
              id="email"
              type="text"
              onChange={onChangeInput}
              value={loginInputs.email}
            />
            <Input01
              placeholder="8자 이상의 password"
              id="password"
              type="password"
              onChange={onChangeInput}
              value={loginInputs.password}
            />
          </Form>
        </section>
      )}
      {isRegister && (
        <section className="login">
          <Title>회원가입</Title>
          <Form>
            <Input01
              placeholder="@를 포함한 email"
              type="text"
              id="newEmail"
              onChange={onChangeNewInput}
              value={registerInputs.newEmail || ''}
            />
            <Input01
              placeholder="8자 이상의 password"
              type="password"
              id="newPassword"
              onChange={onChangeNewInput}
              value={registerInputs.newPassword || ''}
            />
          </Form>
        </section>
      )}
      {isLogin ? (
        <ButtonContainer>
          <Button01
            onClick={onClickLogin}
            name="로그인"
            disabled={UserValidation(loginInputs.email, loginInputs.password)}
          />
          <Button01 onClick={handleRegisterMode} name="회원가입" />
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <Button01 onClick={handleLoginMode} name="로그인" />
          <Button01
            onClick={onClickJoin}
            name="회원가입"
            disabled={UserValidation(registerInputs.newEmail, registerInputs.newPassword)}
          />
        </ButtonContainer>
      )}
    </Main>
  );
}

const Main = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 30px;
  border-radius: 20px;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
  margin-top: 20px;
`;
