import React,{ useState,useEffect } from 'react';
import { useActions } from "../actions";

const SignUpForm = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [ signup,login,getMessage ] = useActions()
  const submitSignUp = (e) => {
    e.preventDefault()
    const dispatch = {
      email: email,
      password: password
    }
    signup(dispatch)
  }
  return (
    <>
      <form>
        新規登録フォーム
        <input placeholder={'メールアドレス'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder={'パスワード'} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submitSignUp}>登録</button>
      </form>
    </>
  );
}

export default SignUpForm;
