import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Done It</h1>
          <p className="text-lg mb-6">
            Your simple and powerful task tracker to help you stay productive
            and organized.
          </p>
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Task Organization
            </h3>
            <p className="text-gray-600">
              Easily organize your tasks with simple drag-and-drop features and
              due dates to keep track of everything.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Real-Time Sync
            </h3>
            <p className="text-gray-600">
              Access your tasks from any device. Your progress syncs in
              real-time, so you're always up to date.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Progress Tracking
            </h3>
            <p className="text-gray-600">
              Track your completed tasks and measure your productivity with
              beautiful progress charts and graphs.
            </p>
          </div>
        </div>
      </section>

      {/* Free Service Highlight Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            A Free Service
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Done It offers a completely free task tracking service with no
            hidden costs. Start organizing your tasks right away!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Done It. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="/terms" className="text-white hover:underline mx-4">
              Terms of Service
            </a>
            <a href="/privacy" className="text-white hover:underline mx-4">
              Privacy Policy
            </a>
            <a href="/contact" className="text-white hover:underline mx-4">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
