import React, { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Handle signup logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg overflow-hidden">
        {/* Logo/Header */}
        <div className="flex justify-center mb-8">
          <img
            src="https://via.placeholder.com/150x50?text=Logo"
            alt="Logo"
            className="h-12"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Links (Login and Terms) */}
          <div className="flex justify-between items-center mt-4">
            <a href="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Login
            </a>
          </div>
        </form>

        {/* Footer/Additional Info */}
        <footer className="mt-6 text-center text-sm text-gray-500">
          <p>
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;
