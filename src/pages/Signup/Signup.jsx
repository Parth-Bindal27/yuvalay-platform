import "./Signup.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Account created successfully!");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const googleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      alert("Google Sign Up Successful!");

      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="signup-page">
      <div className="signup-card">
        <div className="signup-left">
          <h1>Join Yuvalay</h1>

          <p>
            Become part of a community of innovators,
            makers and creators building the future.
          </p>
        </div>

        <div className="signup-right">
          <h2>Create Account</h2>

          <form onSubmit={signup}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
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

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit">
              Create Account
            </button>
          </form>

          <button
            className="google-btn"
            onClick={googleSignup}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
}