import React,{ useState } from 'react';
import { useActions } from "../actions";

const SignUpForm = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [ signup,login,getMessage ] = useActions()
  const submitLogin = (e) => {
    e.preventDefault()
    const dispatch = {
      email: email,
      password: password
    }
    login(dispatch)
  }
  return (
    <>
      <form>
        ログインフォーム
        <input placeholder={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input placeholder={'パスワード'} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submitLogin}>登録</button>
      </form>
    </>
  );
}

export default SignUpForm;
