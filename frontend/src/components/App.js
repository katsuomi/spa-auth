import React from 'react';
import { useSelector } from 'react-redux';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const App = () => {
  const currentUser = useSelector(state => state.auths.currentUser);
  const isLogin = currentUser.email === undefined ? false : true;
  return (
    <>
      {isLogin?
        <p>hi,{currentUser.email}</p>
      :
        <>
          <SignUpForm />
          <br/>
          <LoginForm />
        </>     
      }
    </>
  );
}

export default App;
