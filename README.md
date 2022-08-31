# Team 4

## Find Best Practice

#### 1. Redirect

- router 처리 페이지 리다이렉션 처리를 useEffect 안에서 useHistory 훅으로 관리를 할 경우 페이지 별로 코드가 분리되어 있어 유지보수가 어렵다고 판단했습니다.

- 따라서 APP에서 PrivateRoute와 PublicRoute를 따로 나누어 설정하여 가독성이 좋고, 유지보수가 용이하도록 만든 코드를 구현했습니다.

- 또한 Context 사용으로 로그인 상태를 관리하여 바로 router 처리를 할 수 있게 구현했습니다.

#### 2. API 요청 최적화

- data 생성,수정,삭제마다 api 재요청을 통한 화면 리렌더링하지 않고, 컴포넌트 내부에서 상태관리를 통해 api 재요청 하지않는 성능상 이점을 얻을 수 있었습니다.

#### 3. 관심사 분리

- api 관리 api를 하나의 파일에서 관리하여 관심사에 맞게 분리하였고 이를 통한 유지보수성과 재사용성에 이점을 얻을 수 있었습니다.
- 파일구조 관심사에 맞게 파일을 분리하여 유지보수 뿐 아니라 재사용성도 높였습니다.

- Api URL을 환경변수로 관리하여 보안 취약점을 강화할 수 있었습니다.

#### 4. 협업

- eslint와 prettier 설정을 합의하여 전체적인 문법을 통일했으며 코드의 가독성을 높였습니다.

- husky를 통해 휴먼에러를 강제하여 예기치 못한 오류발생을 줄였습니다. 각 상황에 맞는 commit convention을 정해 간결하면서 명확하게 작업 내용을 표현했습니다.

#### 5. 반복되는 코드 줄이기

- 공통된 스타일링들을 컴포넌트 레벨이 아닌 애플리케이션 레벨에서 적용하여 일괄적으로 스타일 관리를 했습니다.

## Features

#### 1. Sign Up

- 사용자는 이메일을 사용해 회원 가입이 가능합니다.
- 이메일은 `@` 을 포함해야 하며, 비밀번호는 8자 이상이어야 합니다.

#### 2. Sign In

- 가입한 정보로 로그인을 할 수 있습니다.
- 로그인이 완료되면 JWT 토큰이 발급되고 `local storage` 에 저장되고 `/todo` 페이지로 이동합니다.

#### 3. CRUD To Do

- 사용자는 본인의 할 일 목록을 조회, 추가, 수정, 삭제할 수 있습니다.

#### 4. Etc

- 토큰 존재 여부에 따라 그에 맞는 페이지로 이동합니다.

## Dependency

- [x] react
- [x] axios
- [x] styled-components

## Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/best-todo-list.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Set` environment variables

   1. 내려받은 프로젝트의 최상위 폴더 안에 `.env` 파일을 생성합니다.
   2. `.env` 파일 내에 `REACT_APP_API_URL` 값을 설정해 줍니다.
   3. 환경 변수 값에 해당하는 `API_URL`의 주소는 [여기](https://github.com/walking-sunset/selection-task)에서 확인하실 수 있습니다.

4. `start` the project

   ```markdown
   $ npm start
   ```
