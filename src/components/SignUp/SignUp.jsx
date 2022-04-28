import React from 'react';
import './SignUp.css';

const SignUp = ({onRouteChange}) => {
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
                        />
                    </div>
                    <div className="mv3">
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
                    value="Sign Up"
                    onClick={() => onRouteChange('signin')}
                    />
                </div>
            </form>
        </main>
    );
};

export default SignUp;



        