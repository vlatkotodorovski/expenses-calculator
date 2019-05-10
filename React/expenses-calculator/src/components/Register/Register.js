import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'


export class Register extends React.Component {
    render() {
        return (
            <section id="register">
                <div className="center_div">
                <div className="login-container margin_top">
                    <form className="login-form">
                        <label for="">First Name</label>
                        <input type="text" name="firstName" placeholder="" />
        
                        <label for="">Last Name</label>
                        <input type="text" name="lastName" placeholder="" />
        
                        <label for="">E-mail</label>
                        <input type="email" name="email" placeholder="" />
        
                        <label for="">Date Of Birth</label>
                        <input type="date" name="dateOfBirth" placeholder="" />
        
                        <label for="">Telephone</label>
                        <input type="number" name="telephone" placeholder="" />
        
                        <label for="">Country</label>
                        <input type="text" name="country" placeholder=""/>
        
                        <label for="">Password</label>
                        <input type="password" name="password" placeholder="" />
        
                        <button>REGISTER</button>
                    </form>
                    {/* <p>Or if you already have an account,
                        <a href="login.html">Sign in.</a>
                    </p> */}
                    <p>Or if you already have an account,
                    <NavLink to="/"> Sign in</NavLink>
                    </p>
                </div>
            </div>
        
            </section>

        )
    }
}