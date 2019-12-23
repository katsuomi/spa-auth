import React,{ useState } from 'react';
import { useActions } from "../actions";

const LoginForm = () => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [ signup,login ] = useActions()
  const submitSignup = (e) => {
    e.preventDefault()
    const dispatch = {
      name: name,
      password: password
    }
    signup(dispatch)
  }
  return (
    <>
      <form>
        新規登録フォーム
        <input placeholder={'名前'} value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder={'パスワード'} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submitSignup}>登録</button>
      </form>
    </>
  );
}

export default LoginForm;
