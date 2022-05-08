import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        signInEmail: '',
        signInPassword: ''
      }
    }

    onEmailChange = (event) => {
      this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({signInPassword: event.target.value})
    }

    render() {
      const {onRouteChange} = this.props;
      return(
        <main className="pa5 center w-30 shadow-3 ba br3 fadedGreen">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 black">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 mt2 br4 input-reset ba hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 mt2 input-reset ba br4 hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="ph3 b--black br3 pv2 bgBlack shadow-4 greenText input-reset ba grow pointer f5 dib"
                type="button"
                value="Sign in"
                onClick={() => onRouteChange('home')}
              />
            </div>
            <div className="lh-copy mt3">
              <a onClick={() => onRouteChange('signup')} className="f6 b link black dim pointer">Sign up</a>
            </div>
          </form>
        </main>
     );
    }
    
};

export default SignIn;



        