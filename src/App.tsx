import React from 'react';
import './App.scss';
import Login from './components/Auth/Login';
import Button from './components/UI/Button/Button';
import { useCheckToken } from './hooks/useCheckToken';
import AllRoutes from './routes';

function App() {

  useCheckToken()

  return (
    <AllRoutes/>
  );
}

export default App;
