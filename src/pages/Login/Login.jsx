import "./Login.css";
import { useState } from "react";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/");

    } catch (error) {
      alert(error.message);
    }
  };

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);

      alert("Google Login Successful");

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="login-page">

      <div className="login-card">

        <div className="login-left">

          <h1>Welcome Back</h1>

          <p>
            Sign in to continue your journey with Yuvalay.
          </p>

        </div>

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={login}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <button type="submit">
              Login
            </button>

          </form>

          <button
            className="google-btn"
            onClick={googleLogin}
          >
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?
            <span> Sign Up</span>
          </p>

        </div>

      </div>

    </section>
  );
}