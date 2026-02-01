import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import { login, signup, googleLogin } from "../../firebase/config";
import { toast } from "react-toastify";

const Login = () => {
  const [authMethod, setAuthMethod] = useState(null);
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign Up") {
        await signup(name, email, password);
        toast.success("Account created successfully ");
      } else {
        await login(email, password);
        toast.success("Welcome back ");
      }
      navigate("/");
    } catch (error) {
      // Error handled in firebase config
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await googleLogin();
      toast.success("Logged in with Google ");
      navigate("/");
    } catch (error) {
      setLoading(false);
    }
  };

  const handleBack = () => {
    setAuthMethod(null);
    setName("");
    setEmail("");
    setPassword("");
  };

  if (loading) {
    return (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="login">
      <img src={logo} alt="Netflix Logo" className="login-logo" />

      <div className="login-form">
        <h1>{signState}</h1>

        {/* Initial Auth Method Selection */}
        {authMethod === null && (
          <div className="auth-methods">
            <button className="auth-btn google-btn" onClick={handleGoogle}>
              <svg className="auth-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Continue with Google</span>
            </button>

            <button 
              className="auth-btn email-btn" 
              onClick={() => setAuthMethod('email')}
            >
              <svg className="auth-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Continue with Email</span>
            </button>

            <div className="form-divider">
              <span>New to Netflix?</span>
            </div>

            <button 
              className="signup-link-btn" 
              onClick={() => {
                setSignState("Sign Up");
                setAuthMethod('email');
              }}
            >
              Create a new account
            </button>
          </div>
        )}

        {/* Email Auth Form */}
        {authMethod === 'email' && (
          <>
            <button className="back-btn" onClick={handleBack}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>

            <form onSubmit={user_auth}>
              {signState === "Sign Up" && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit" className="submit-btn">
                {signState}
              </button>
            </form>

            <div className="form-switch">
              {signState === "Sign In" ? (
                <>
                  New to Netflix?{" "}
                  <span onClick={() => setSignState("Sign Up")}>
                    Sign up now
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span onClick={() => setSignState("Sign In")}>
                    Sign in
                  </span>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;