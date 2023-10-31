import { useState } from 'react'
import './App.css'


function App() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form  className="login-form">
              <span className="login-form-title">
                Wellcome
              </span>
              <span className="login-form-img">
                <img  src={'./ca.png'} alt="cabuloso" />
              </span>

              <div className="wrap-input">
                <input className={email ? "has-value input" : 'input'} type="email" value={email} onChange={(e)=> {
                  setEmail(e.target.value)
                }}/>
                <span className="focus-input" data-placeholder='Email'></span>
              </div>

              <div className="wrap-input">
                <input className={pass ? "has-value input" : 'input'} type="password" value={pass} onChange={(e)=> {
                  setPass(e.target.value)
                }} />
                <span className="focus-input" data-placeholder='Password'></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">
                  Login
                </button>
              </div>
              
              <div className="text-center">
                <span className="text1">Não possui conta?</span>
                <a href="#" className="text2">Criar conta</a>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
