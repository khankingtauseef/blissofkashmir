import React from 'react';
import './signup.css';


const SignUp = (props) =>{

        
        return(

            <div className='koshurvagabond-views-signup-form'>
                <h1 className="koshurvagabond-title-text">Sign Up!</h1>

                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="email" name="email" 
                placeholder="Email"/>

                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="password" name="password" 
                placeholder="Password"/>

                <input className='koshurvagabond-form-input koshurvagabond-views-formitem' type="text" name="confirmpassword" 
                placeholder="Confirm Password"/>

                <input className='koshurvagabond-form-btn koshurvagabond-views-signup-btn' 
                    type="submit" value="Sign up"/>
            </div>
        );

}

export default SignUp;