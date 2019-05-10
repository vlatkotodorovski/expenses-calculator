import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'


export class Login extends React.Component {
    render() {
        return (
            <section id="login">
                <div className="center_div">
                    <div className="login-container">
                        <form className="login-form">
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="" />

                            <label>Password</label>
                            <input type="password" name="password" placeholder="" />

                            <button>SIGN IN</button>

                        </form>
                        {/* <p>Or if you don't have an account, <a href="register.html">Register.</a></p> */}
                        <p>Or if you don't have an account, <NavLink to="/register"> Register</NavLink></p>
                    </div>
                </div>
            </section>

        )
    }
}