import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import './fb-login.css';

const responseFacebook = (response) => {
    console.log(response);
}

const FbLogin = (props) =>{
    return(
        <React.Fragment>
            <FacebookLogin
            appId="383262298942413"
            fields="name,email,picture"
            callback={responseFacebook} 
            render={renderProps => (
                <button onClick={renderProps.onClick} className='koshurvagabond-form-FB-button'>Log In with FaceBook</button>
            )}
            />
        </React.Fragment>
    );
}

export default FbLogin;