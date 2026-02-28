import "./login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login-card">
            <div className="login-header">
                <h1>Welcome back</h1>
                <p>Please sign in to your account</p>
            </div>

            <form className="login-form">
                <div className="input-group">
                    <span className="input-label">Email</span>
                    <div className="input-field">
                        <input
                            type="email"
                            name="email"
                            placeholder="mila@example.com"
                            required
                        />
                    </div>
                </div>

                <div className="input-group">
                    <span className="input-label">Password</span>
                    <div className="input-field">
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                </div>

                <div className="form-extras">
                    <label className="remember-me">
                        <input type="checkbox" defaultChecked /> Remember me
                    </label>
                    <a href="#" className="forgot-link">
                        Forgot password?
                    </a>
                </div>

                <Link to="/home" className="login-btn">
                    Log in
                </Link>

                <div className="signup-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>

            </form>

            <div className="demo-hint">
                ⚡ demo: use any email / password (no validation)
            </div>
        </div>
    );
}

export default Login;
