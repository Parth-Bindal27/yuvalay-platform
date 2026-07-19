import { checkAdmin } from "../../services/adminService";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiSearch,
  FiUser,
  FiLogOut,
  FiLayout,
  FiHeart,
  FiSettings,
} from "react-icons/fi";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/logo.png";
export default function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  useEffect(() => {

  async function verifyAdmin() {

    if (!currentUser) {
      setIsAdmin(false);
      return;
    }

    console.log("Logged in email:", currentUser.email);

    const admin = await checkAdmin(currentUser.email);

    console.log("Admin Data:", admin);

    setIsAdmin(!!admin);
  }

  verifyAdmin();

}, [currentUser]);

  const logout = async () => {
    await signOut(auth);

    setProfileOpen(false);
    setMobileOpen(false);

    navigate("/");
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
      dropdown: true,
    },
    {
      name: "Programs",
      path: "/programs",
      dropdown: true,
    },
    {
      name: "Makerspace",
      path: "/makerspace",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
  name: "Gallery",
  path: "/gallery",
},

...(isAdmin
  ? [
      {
        name: "Admin",
        path: "/admin",
      },
    ]
  : []),

{
  name: "Contact",
  path: "/contact",
},
  ];

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      <Link
        to="/"
        className="logo"
      >
        <img
          src={logo}
          alt="Yuvalay"
        />

        <div className="logo-text">
          <h2>Yuvalay</h2>

          <span>Makerspace</span>
        </div>
      </Link>

      <nav
        className={
          mobileOpen
            ? "nav-menu active"
            : "nav-menu"
        }
      >
        {navLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {item.name}

            {item.dropdown && (
              <FiChevronDown className="arrow" />
            )}
          </NavLink>
        ))}

        <div className="mobile-auth">
          <Link
            to="/donate"
            className="donate-btn mobile-donate"
            onClick={() => setMobileOpen(false)}
          >
            <FiHeart />

            Donate
          </Link>
                    {!currentUser ? (
            <>
              <Link
                to="/login"
                className="login-btn"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="signup-btn"
                onClick={() => setMobileOpen(false)}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="mobile-item"
                onClick={() => setMobileOpen(false)}
              >
                <FiUser />
                My Profile
              </Link>

              <Link
                to="/dashboard"
                className="mobile-item"
                onClick={() => setMobileOpen(false)}
              >
                <FiLayout />
                Dashboard
              </Link>

              <button
                className="logout-mobile"
                onClick={logout}
              >
                <FiLogOut />
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="right-side">

        <Link
          to="/donate"
          className="donate-btn desktop-donate"
        >
          <FiHeart />
          Donate
        </Link>

        <button className="search-btn">
          <FiSearch />
        </button>

        {!currentUser ? (
          <div className="desktop-auth">
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div
            className="profile"
            ref={profileRef}
          >
            <button
              className="profile-btn"
              onClick={() =>
                setProfileOpen(!profileOpen)
              }
            >
              <img
                src={
                  currentUser.photoURL ||
                  `https://ui-avatars.com/api/?background=B6D63E&color=111111&name=${
                    currentUser.displayName || "User"
                  }`
                }
                alt="Profile"
              />

              <span>
                {currentUser.displayName || "Profile"}
              </span>

              <FiChevronDown
                className={
                  profileOpen
                    ? "rotate"
                    : ""
                }
              />
            </button>

            {profileOpen && (
              <div className="profile-dropdown">

                <Link to="/profile">
                  <FiUser />
                  My Profile
                </Link>

                <Link to="/dashboard">
                  <FiLayout />
                  Dashboard
                </Link>

                <Link to="/settings">
                  <FiSettings />
                  Settings
                </Link>

                <button onClick={logout}>
                  <FiLogOut />
                  Logout
                </button>

              </div>
            )}
          </div>
        )}

        <button
          className="menu-btn"
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
        >
          {mobileOpen ? (
            <FiX />
          ) : (
            <FiMenu />
          )}
        </button>

      </div>
    </header>
  );
}