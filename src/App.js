import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './styles/Globalstyles';
import AuthPage from './pages/Auth';
import TodoPage from './pages/Todo';
import PrivateRoutes from './utils/PrivateRoutes';
// import PublicRoutes from './utils/routes/PublicRoutes';
// import PrivateRoutes from './utils/routes/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route element={<PublicRoutes />}> */}
        <Route index element={<AuthPage />} />
        {/* </Route> */}
        <Route element={<PrivateRoutes />}>
          <Route path="todo" element={<TodoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
