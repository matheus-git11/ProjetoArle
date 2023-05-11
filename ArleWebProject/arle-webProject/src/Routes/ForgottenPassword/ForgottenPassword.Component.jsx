import React, { Fragment } from 'react'


import ArleLogo from '../../assets/Arle.png'
import { Link } from 'react-router-dom';


const ForgottenPassword = () => {
  return (
    <Fragment>
        <div className='body'>
        <div class="login-card-container">
        <div class="login-card">

            <div  class="login-card-logo">
                <img src={ArleLogo} alt="Logo Image" class="logo"/>
            </div>

            <div class="login-card-header">
                <div>Informe seu email para enviarmos sua senha!</div>
            </div>

            <form class="login-card-form">

                <div class="form-item">
                    <span class="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" placeholder="Email" required autofocus/>
                </div>
            
                <button type="submit">Recuperar</button>
            </form>

            <Link to={'/login'}>
            <div class="login-card-footer">
                Ja tem uma conta? <a href="Login.html">Faca o Login para aproveitar a plataforma</a>.
            </div>
            </Link>
        </div>   
    </div>
        </div>
    </Fragment>
  )
}

export default ForgottenPassword;