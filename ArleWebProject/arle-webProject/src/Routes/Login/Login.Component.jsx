import React, { Fragment } from 'react'

import ArleLogo from '../../assets/Arle.png'


import './Login.Style.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
        <div className='body'>
        <div className="login-card-container">
        <div className="login-card">

            <div  className="login-card-logo">
                <img src={ArleLogo} alt="Logo Image" className="logo"/>
            </div>

            <div className="login-card-header">
                <div>Faça o login para aproveitar nossa plataforma</div>
            </div>

            <form className="login-card-form">

                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" placeholder="Inserir Login" required autofocus/>
                </div>

                <div className="form-item">
                    <span className="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Inserir Senha" required/>
                </div>

                <div className="form-item-other">
                    <div className="checkbox">
                        <input type="checkbox" id="rememberMeCheckbox"/>
                        <label for="rememberMeCheckbox">Lembrar-me</label>
                    </div>
                    <Link to={'/ForgottenPassword'}>
                    <a>Esqueci minha senha!</a>
                    </Link>
                </div>

            
             <button type="submit">Entrar</button>
          
            </form>

            <div className="login-card-footer">
                <Link to={'/register'} >
                Nao tem uma conta? <a>Crie uma conta de graca</a>.
                </Link>
            </div>
        </div>

        <div className="login-card-social">
            <div>Faca o login atraves de outra plataforma</div>
            <div className="login-card-social-btn">
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                     </svg>
                </a>

                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
                     </svg>
                </a>
            </div>
        </div>

    </div>
        </div>
    </Fragment>
  )
}

export default Login;