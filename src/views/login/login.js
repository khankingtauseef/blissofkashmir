import React from 'react';
import FbLogin from './fb-login/fb-login';
import './login.css';
import { Link } from 'react-router-dom'

const onInputUserName = (e, props) => {
    props.onInputUserName(e.target.value);
}

const onInputPassword = (e, props) => {
    props.onInputPassword(e.target.value);
}

const Login = (props) =>{
    return(
        <div className='koshurvagabond-views-login-form'>
            <h1 className="koshurvagabond-title-text">LOG IN</h1>

            <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="text" name="username" 
            placeholder="Email" onChange={(e)=>{onInputUserName(e, props)}}/>

            <div className='form-box'>
                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="password" name="password" 
                    placeholder="Password" onChange={(e)=>{onInputPassword(e, props)}}/>
                <a href='#'>Forgot your password?</a>
            </div>
            
            <div className='form-box'>
                <input className='koshurvagabond-form-btn koshurvagabond-views-login-btn' 
                type="submit" value="Login"
                onClick={(e)=>{props.validateUser();}}/>
                <Link to="/signup">Sign up!</Link>
            </div>
            
            <div className='koshurvagabond-views-login-socialmedia'>
                <FbLogin></FbLogin>
            </div>
        </div>
    );
}
export default Login;