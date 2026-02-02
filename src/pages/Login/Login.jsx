import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/logo.png";
import netflix_spinner from "../../assets/netflix_spinner.gif";
import googleIcon from "../../assets/google.png";
import emailIcon from "../../assets/email.png";
import { login, signup, googleLogin, auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
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
        toast.success("Account created");
      } else {
        await login(email, password);
        toast.success("Welcome back");
      }
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signOut(auth); // 🔥 force chooser
      await googleLogin();
      toast.success("Google login success");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
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
        <img src={netflix_spinner} alt="" />
      </div>
    );
  }

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />

      <div className="login-form">
        <h1>{signState}</h1>

        {/* FIRST SCREEN */}
        {authMethod === null && (
          <div className="auth-methods">
            <button className="auth-btn google-btn" onClick={handleGoogle}>
              <img src={googleIcon} alt="" />
              <span>Continue with Google</span>
            </button>

            <button
              className="auth-btn email-btn"
              onClick={() => setAuthMethod("email")}
            >
              <img src={emailIcon} alt="" />
              <span>Continue with Email</span>
            </button>

            <p className="divider">OR</p>

            <button
              className="signup-link-btn"
              onClick={() => {
                setSignState("Sign Up");
                setAuthMethod("email");
              }}
            >
              Create new account
            </button>
          </div>
        )}

        {/* EMAIL FORM */}
        {authMethod === "email" && (
          <>
            <button className="back-btn" onClick={handleBack}>← Back</button>

            <form onSubmit={user_auth}>
              {signState === "Sign Up" && (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
               <button type="submit" className="submit-btn">{signState}</button>

            </form>

            <div className="form-switch">
              {signState === "Sign In" ? (
                <>
                  New here?{" "}
                  <span onClick={() => setSignState("Sign Up")}>Sign up</span>
                </>
              ) : (
                <>
                  Already have account?{" "}
                  <span onClick={() => setSignState("Sign In")}>Sign in</span>
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
