import React, { Component } from 'react';
import Login from './views/login/login';
import './App.css';
import SignUp from './views/signup/signup';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'amjad',
      password:'aaa',
      attemptedUserName:'',
      attemptedPassword:'',
    };

    this.validateUser = this.validateUser.bind(this);
    this.onInputUserName = this.onInputUserName.bind(this);
    this.onInputPassword = this.onInputPassword.bind(this);

  }

  validateUser(attemptedUserName,attemptedPassword){
    if(this.state.attemptedUserName === this.state.userName){
      if(this.state.attemptedPassword === this.state.password){
        console.log("Login Successful");
        HashRouter.push('/signup');
        return;
      }
    }
    console.log("Login Unsuccessful");
  }

  onInputUserName(attemptedUserName){
    this.setState({attemptedUserName})
  }

  onInputPassword(attemptedPassword){
    this.setState({attemptedPassword})
  }
  
  render() {
    //Main Application File
    return (
      <HashRouter>
        <div className="app-container">
          <Route exact path="/" render={(props) => <Login validateUser={this.validateUser} onInputUserName={this.onInputUserName} onInputPassword={this.onInputPassword} />}
          path="/"></Route>

          <Route render={(props) => <SignUp validateUser={this.validateUser} onInputUserName={this.onInputUserName} onInputPassword={this.onInputPassword} />}
          path="/signup"></Route>
        </div>
      </HashRouter>
      
    );
  }
}
export default App;
