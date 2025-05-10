import React from "react";
import { Outlet } from "react-router-dom"; // To render child components
import Footer from "./Footer"; // Import your footer

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Outlet /> {/* This renders the current page */}
      </main>

      {/* Help Section - Appears on all pages */}
      <div className="bg-pink-100 py-12 px-6 mb-40">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Take the next step
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto pb-40">
          <div className="bg-purple-500 text-white p-6 shadow-lg">
            <h3 className="text-lg font-bold">Get help</h3>
            <p className="mt-2">Call or text 112, 24 hours a day, 7 days a week.</p>
            <a href="#" className="mt-4 block font-bold hover:underline">
              Get help now →
            </a>
          </div>

          <div className="bg-purple-500 text-white p-6 shadow-lg">
            <h3 className="text-lg font-bold">Asking for help</h3>
            <p className="mt-2">Take the first step.</p>
            <a href="start-conversation" className="mt-11 block font-bold hover:underline">
              Learn more →
            </a>
          </div>

          <div className="bg-purple-500 text-white p-6 shadow-lg">
            <h3 className="text-lg font-bold">Types of treatment</h3>
            <p className="mt-2">Explore your options.</p>
            <a href="support3" className="mt-11 block font-bold hover:underline">
              Learn more →
            </a>
          </div>

          <div className="bg-purple-500 text-white p-6 shadow-lg">
            <h3 className="text-lg font-bold">Supporting someone</h3>
            <p className="mt-2">Start the conversation.</p>
            <a href="Seekingsupport" className="mt-11 block font-bold hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>

      {/* Footer - Appears on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
