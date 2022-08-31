import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Input01 from '../../components/commons/inputs/Input01';
import Button01 from '../../components/commons/buttons/Button01';
import { UserValidation } from '../../utils/UserValidation';
import axios from 'axios';
import { join, login } from '../../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [NewInputs, setNewInputs] = useState({ NewEmail: '', NewPassword: '' });

  const onChangeInput = event => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onChangeNewInput = event => {
    setNewInputs({
      ...NewInputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickJoin = async () => {
    await axios
      .post(`${join}`, {
        email: NewInputs.NewEmail,
        password: NewInputs.NewPassword,
      })
      .then(() => {
        alert('회원가입에 성공했습니다');
        setNewInputs({ NewEmail: '', NewPassword: '' });
        navigate('/');
      });
  };

  const onClickLogin = async () => {
    await axios
      .post(`${login}`, {
        email: inputs.email,
        password: inputs.password,
      })
      .then(res => {
        const accessToken = res.data.access_token;
        if (accessToken) {
          localStorage.setItem('accessToken', accessToken);
        }
        alert('로그인에 성공했습니다');
        navigate('/todo');
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/todo');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <section className="login">
        <h1>기존회원 로그인</h1>
        <Form>
          <Input01
            placeholder="@를 포함한 email"
            id="email"
            type="text"
            onChange={onChangeInput}
            value={inputs.email}
          />
          <Input01
            placeholder="8자 이상의 password"
            id="password"
            type="password"
            onChange={onChangeInput}
            value={inputs.password}
          />
          <Button01
            onClick={onClickLogin}
            name="로그인"
            disabled={UserValidation(inputs.email, inputs.password)}
          />
        </Form>
      </section>
      <section className="login">
        <h1>신규회원 가입</h1>
        <Form>
          <Input01
            placeholder="@를 포함한 email"
            type="text"
            id="NewEmail"
            onChange={onChangeNewInput}
            value={NewInputs.NewEmail || ''}
          />
          <Input01
            placeholder="8자 이상의 password"
            type="password"
            id="NewPassword"
            onChange={onChangeNewInput}
            value={NewInputs.NewPassword || ''}
          />
          <Button01
            onClick={onClickJoin}
            name="회원가입"
            disabled={UserValidation(NewInputs.NewEmail, NewInputs.NewPassword)}
          />
        </Form>
      </section>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  section {
    width: 400px;
    padding: 80px 0px;
    h1 {
      margin-bottom: 30px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 15px;
  }
`;
