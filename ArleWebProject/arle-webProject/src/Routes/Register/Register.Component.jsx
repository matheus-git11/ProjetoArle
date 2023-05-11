import React, { Fragment } from 'react'

import ArleLogo from '../../assets/Arle.png'

import  '../Home/Home.style.css';
import { Link } from 'react-router-dom';

const Register= () => {
  return (
    <Fragment>
        <div className='body'>
        <div  className="login-card-container">
        <div  className="login-card">

            <div   className="login-card-logo">
                <img src={ArleLogo} alt="Logo Image"  className="logo"/>
            </div>

            <div  className="login-card-header">
                <div>Faça seu registro para aproveitar nossa plataforma</div>
            </div>

            <form  className="login-card-form">

                <div  className="form-item">
                    <span  className="form-item-icon material-symbols-rounded">person</span>
                    <input type="text" placeholder="Inserir Nome Completo" required autofocus/>
                </div>

                <div  className="form-item">
                    <span  className="form-item-icon material-symbols-rounded">mail</span>
                    <input type="text" placeholder="Inserir Login" required autofocus/>
                </div>

                <div  className="form-item">
                    <span  className="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Inserir Senha" required/>
                </div>

                <div  className="form-item">
                    <span  className="form-item-icon material-symbols-rounded">lock</span>
                    <input type="password" placeholder="Confirmar Senha" required/>
                </div>

            
                <button type="submit">Registrar</button>
            </form>

            <Link to={'/login'}>
            <div  className="login-card-footer">
                Ja tem uma conta? <a href="Login.html">Faca o Login para aproveitar a plataforma</a>.
            </div>
            </Link>
        </div>   
    </div>
        </div>
    </Fragment>
  )
}

export default Register;