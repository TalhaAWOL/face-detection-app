import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            signUpName: '',
            signUpEmail: '',
            signUpPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({signUpName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({signUpEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signUpPassword: event.target.value})
    }

    onSignUpSubmit = (event) => {
        fetch('http://localhost:3001/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.signUpName,
                email: this.state.signUpEmail,
                password: this.state.signUpPassword
            })
        })
        .then(res => res.json())
        .then(resp => {
            if(resp !== 'error'){
                this.props.loadUser(resp)
                this.props.onRouteChange('signin')
                console.log(resp)
            }else{
                console.log(resp)
            }
        })
    }

    render() {
        const {onRouteChange} = this.props;
        return(
            <main className="pa5 center w-30 ba shadow-3 br3 fadedGreen">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 black">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input
                                className="pa2 mt2 br4 input-reset ba hover-bg-black hover-white w-100"
                                type="text"
                                name="name"
                                id="name"
                                onChange={this.onNameChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 mt2 br4 input-reset ba hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 mt2 input-reset ba br4 hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                        className="ph3 b--black br3 pv2 bgBlack shadow-4 greenText input-reset ba grow pointer f5 dib"
                        type="button"
                        value="Sign Up"
                        onClick={this.onSignUpSubmit}
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <a onClick={() => onRouteChange('signin')} className="f6 b link black dim pointer">Sign in</a>
                    </div>
                </form>
            </main>
        );
    }
    
};

export default SignUp;



        