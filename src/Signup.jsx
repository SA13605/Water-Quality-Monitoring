import { Link } from "react-router-dom";
import React from 'react'
import './signup.css'

function Signup() {
    return (
        <>
            <div className="signup-card">
                <div className="signup-header">
                    <h1>Create account</h1>
                    <p>Join us – it only takes a minute</p>
                </div>

                <form className="signup-form" action="#" method="post">
                    <div className="name-row">
                        <div className="input-group">
                            <span className="input-label">First name</span>
                            <div className="input-field">
                                <input type="text" id="firstname" name="firstname" placeholder="Mila" required />
                            </div>
                        </div>
                        <div className="input-group">
                            <span className="input-label">Last name</span>
                            <div className="input-field">
                                <input type="text" id="lastname" name="lastname" placeholder="Kunis" required />
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <span className="input-label">Email</span>
                        <div className="input-field">
                            <input type="email" id="email" name="email" placeholder="mila@example.com" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <span className="input-label">Password</span>
                        <div className="input-field">
                            <input type="password" id="password" name="password" placeholder="Create a password" required />
                        </div>
                    </div>

                    <div className="input-group">
                        <span className="input-label">Confirm password</span>
                        <div className="input-field">
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter password" required />
                        </div>
                    </div>

                    <div className="terms">
                        <input type="checkbox" id="terms" name="terms" required />
                            <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
                    </div>

                    <button  className="signup-btn"><Link to="/">Sign up</Link></button>

                    <div className="login-text">
                        Already have an account? <Link to="/">Log in</Link>
                    </div>
                </form>

                <div className="demo-hint">
                    ⚡ demo: no validation – any info works
                </div>
            </div>
        </>
    )
}

export default Signup;