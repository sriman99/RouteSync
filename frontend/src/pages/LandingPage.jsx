// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-scroll';
import Header from '../components/Header';
import background from '../assets/background.jpg';
import 'animate.css';

const LandingPage = () => (
  <div className="land min-h-screen bg-gray-800 overflow-hidden">
    <Header />
    
    {/* Hero Section */}
    <div className="relative w-full h-screen bg-cover bg-gray-700 bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto flex flex-col justify-center items-center h-full p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white text-center mb-4 animate__animated animate__fadeIn">Welcome to RouteSync</h1>
        <p className="text-lg md:text-2xl text-white mb-6 text-center animate__animated animate__fadeIn animate__delay-1s">Your trusted solution for corporate carpooling.</p>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="bg-blue-500 text-white py-3 px-6 rounded shadow hover:bg-blue-600 transition transform hover:scale-105 animate__animated animate__bounce animate__delay-2s"
        >
          Learn More
        </Link>
        <div className="mt-8 flex space-x-4">
          {/* <button className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition">Get Started</button> */}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition"
            onClick={() => window.location.href = '/admin'}
          >
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition">Contact Us</button>
        </div>
      </div>
    </div>
    
    {/* Features Section */}
    <div id="features" className="container mx-auto py-12 px-6 bg-slate-700">
      <h2 className="text-4xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        <div className="bg-gray-800 text-white p-6 rounded shadow border-2 border-gray-900 hover:shadow-lg transition transform hover:scale-105 animate__animated animate__fadeIn">
          <h3 className="text-xl font-bold mb-3">User-Friendly Registration</h3>
          <p>Easy registration for employees to create and update their profiles, making onboarding seamless.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Quick profile creation</li>
            <li>Vehicle and driver verification</li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded shadow hover:shadow-lg transition transform border-2 hover:scale-105  border-gray-900 animate__animated animate__fadeIn animate__delay-1s">
          <h3 className="text-xl font-semibold mb-3 text-slate-300">Route Management</h3>
          <p>View available routes and join carpool options tailored to your needs with an interactive interface.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Route suggestions based on preferences</li>
            <li>Interactive route visualization with maps</li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded shadow hover:shadow-lg transition transform  border-2 border-gray-900 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s">
          <h3 className="text-xl font-semibold mb-3">Real-Time Notifications</h3>
          <p>Receive SMS alerts and app notifications to stay informed about schedule changes and route updates.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>SMS alerts for new routes and schedule changes</li>
            <li>Email notifications for registration and updates</li>
          </ul>
        </div>
        <div className="bg-gray-800  text-white p-6 rounded shadow hover:shadow-lg transition transform border-2 border-gray-900 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
          <h3 className="text-xl font-semibold mb-3">Advanced Search & Filters</h3>
          <p>Search and filter available routes based on various criteria such as location, date, and time.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Filter routes by location and time</li>
            <li>Search for specific carpool preferences</li>
          </ul>
        </div>
        <div className="bg-gray-800  text-white p-6 rounded shadow hover:shadow-lg transition transform border-2 border-gray-900 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s">
          <h3 className="text-xl font-semibold mb-3">Complaint and Suggestion Handling</h3>
          <p>Submit and track complaints or suggestions for improving the carpooling experience.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Easy submission of feedback</li>
            <li>Admin responses and issue tracking</li>
          </ul>
        </div>
        <div className="bg-gray-800 text-white p-6 rounded shadow hover:shadow-lg transition transform border-2 border-gray-900 hover:scale-105 animate__animated animate__fadeIn animate__delay-5s">
          <h3 className="text-xl font-semibold mb-3">Comprehensive Reporting</h3>
          <p>Admins can generate detailed reports to monitor carpooling trends and optimize routes.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Monthly and weekly reports for route analysis</li>
            <li>Employee usage statistics and feedback summaries</li>
          </ul>
        </div>
      </div>
    </div>
    
    {/* About Us Section */}
    <div id="about-us" className="bg-slate-800 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl mb-4">
          At RouteSync, we are committed to optimizing corporate transportation through innovative carpooling solutions.
          Our mission is to create a safe, efficient, and eco-friendly environment for employees.
        </p>
        <p className="text-lg md:text-xl mb-6">
          Join us as we transform the way employees commute, saving time, costs, and fostering community engagement.
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition">Learn More</button>
          <button className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-6 rounded hover:bg-blue-500 hover:text-white transition">Join Us</button>
        </div>
      </div>
    </div>
    
    {/* Footer Section */}
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 RouteSync. All rights reserved.</p>
        <p className="text-sm">Built with love for a better carpooling experience.</p>
      </div>
    </footer>
  </div>
);

export default LandingPage;
