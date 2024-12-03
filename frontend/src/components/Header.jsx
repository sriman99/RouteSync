
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaMicrosoft } from 'react-icons/fa';
import rslogo from '../assets/RS-logo.png';
import userlogo from '../assets/bmw.jpeg';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [successMessage, setSuccessMessage] = useState('');
  const [userActivity, setUserActivity] = useState(null); // To store and display user activity data

  // Toggle modal visibility
  const toggleAuthModal = () => {
    setShowAuthModal(!showAuthModal);
  };

  // Toggle between Signin and Signup
  const toggleSigninSignup = () => {
    setIsSignin(!isSignin);
    setEmail('');
    setPassword('');
    setUsername('');
    setSuccessMessage('');
  };

  // Handle form submission
  const handleAuthSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !password || (!isSignin && !username)) {
      alert('Please fill in all required fields.');
      return;
    }

    const backendUrl = 'http://127.0.0.1:8000';

    try {
      const response = await fetch(`${backendUrl}/${isSignin ? 'signin' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          ...(isSignin ? {} : { username }), // Include username only for signup
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccessMessage(`${isSignin ? 'Signin' : 'Signup'} successful!`);
        if (isSignin) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          // Fetch user data for displaying user activity
          fetchUserActivity();
        } else {
          // Reset form on successful signup
          setEmail('');
          setPassword('');
          setUsername('');
        }
        setShowAuthModal(false); // Close modal on success
      } else {
        alert(data.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to the server.');
    }
  };

  // Function to fetch user activity data after signin or signup
  const fetchUserActivity = async () => {
    const backendUrl = 'http://127.0.0.1:8000/user-activity';

    try {
      const response = await fetch(backendUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserActivity(data);
      } else {
        alert('Failed to fetch user activity data.');
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching user activity data.');
    }
  };

  // Function to handle scroll event and set the state
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    alert('Logout successful!');
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full p-2 shadow-lg z-50 transition ${isScrolled ? 'bg-opacity-80 backdrop-blur-lg' : ''}`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={rslogo}
            alt="RouteSync Logo"
            className="w-12 h-12 rounded-full border-2 border-white mr-3"
          />
          <h1 className="text-white text-2xl font-bold">RouteSync</h1>
        </div>

        {/* Navigation Links
        <ul className="hidden md:flex space-x-5 ml-auto">
          <li>
            <Link to="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="features" className="text-white hover:text-blue-400 transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-white hover:text-blue-400 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="text-white hover:text-blue-400 transition">
              Contact Us
            </Link>
          </li>
        </ul> */}
        <ul className="hidden md:flex space-x-5 ml-auto">
  <li>
    <ScrollLink 
      to="land" 
      smooth={true} 
      duration={500} 
      className="text-white hover:text-blue-400 transition cursor-pointer"
    >
      Home
    </ScrollLink>
  </li>
  <li>
    <ScrollLink 
      to="features" 
      smooth={true} 
      duration={500} 
      className="text-white hover:text-blue-400 transition cursor-pointer"
    >
      Features
    </ScrollLink>
  </li>
  <li>
    <ScrollLink 
      to="about-us" 
      smooth={true} 
      duration={500} 
      className="text-white hover:text-blue-400 transition cursor-pointer"
    >
      About Us
    </ScrollLink>
  </li>
  <li>
    <ScrollLink 
      to="about-us" 
      smooth={true} 
      duration={500} 
      className="text-white hover:text-blue-400 transition cursor-pointer"
    >
      Contact Us
    </ScrollLink>
  </li>
</ul>

        {/* User Icon */}
        <div
          className="relative flex items-center cursor-pointer ml-5"
          onClick={toggleAuthModal}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-gray-800 overflow-hidden">
            <img
              src={userlogo}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Authentication Modal */}
      {/* Authentication Modal */}
      {showAuthModal && (
        <div className=" flex justify-center items-center inset-0 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative overflow-hidden felx justify-center align-center pt-10">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isSignin ? 'Sign In' : 'Sign Up'}
            </h2>

            {/* Social Sign-in Buttons */}
            <div className="flex flex-col space-y-3 mb-6">
              <button className="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                <FaGoogle className="mr-2" />{' '}
                {isSignin ? 'Sign In with Google' : 'Sign Up with Google'}
              </button>
              <button className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition">
                <FaGithub className="mr-2" />{' '}
                {isSignin ? 'Sign In with GitHub' : 'Sign Up with GitHub'}
              </button>
              <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                <FaMicrosoft className="mr-2" />{' '}
                {isSignin ? 'Sign In with Microsoft' : 'Sign Up with Microsoft'}
              </button>
            </div>

            {/* Separator */}
            <div className="text-center mb-6">
              <span className="text-gray-400">or</span>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleAuthSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {!isSignin && (
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                {isSignin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                {isSignin ? 'New to RouteSync?' : 'Already have an account?'}{' '}
                <span
                  className="text-blue-500 cursor-pointer hover:underline"
                  onClick={toggleSigninSignup}
                >
                  {isSignin ? 'Sign Up' : 'Sign In'}
                </span>
              </p>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              onClick={toggleAuthModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* User Activity Display */}
      {userActivity && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
            <h2 className="text-xl font-bold mb-4">User Activity</h2>
            <pre className="text-left">{JSON.stringify(userActivity, null, 2)}</pre>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setUserActivity(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
