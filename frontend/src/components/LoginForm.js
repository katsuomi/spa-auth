import React,{ useState } from 'react';
import { useActions } from "../actions";

const SignUpForm = () => {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [ signup,login ] = useActions()
  const submitLogin = (e) => {
    e.preventDefault()
    const dispatch = {
      name: name,
      password: password
    }
    login(dispatch)
  }
  return (
    <>
      <form>
        ログインフォーム
        <input placeholder={'名前'} value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder={'パスワード'} value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={submitLogin}>登録</button>
      </form>
    </>
  );
}

export default SignUpForm;
