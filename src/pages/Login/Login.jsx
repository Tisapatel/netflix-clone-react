import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase/config'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import { toast } from 'react-toastify'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const user_auth = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (signState === "Sign Up") {
        await signup(name, email, password)
        toast.success("Account created ")
      } else {
        await login(email, password)
        toast.success("Login successful")
      }

      navigate("/")
    } catch (error) {
      toast.error(error.message)   
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="loading" />
      </div>
    )
  }

  return (
    <div className='login'>
      <img src={logo} alt="Logo" className='login-logo' />

      <div className="login-form">
        <h1>{signState}</h1>

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

          {/* ❌ NO onClick here */}
          <button type="submit">
            {signState}
          </button>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}>
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState("Sign In")}>
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
