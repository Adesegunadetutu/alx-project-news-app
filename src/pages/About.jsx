import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>About | NewsExtra</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-center">About NewsExtra</h1>

      <p className="text-lg mb-4">
        <strong>NewsExtra</strong> is a dynamic news platform designed to keep you informed, inspired, and engaged. We curate top stories from trusted sources across categories like politics, business, health, sports, and technology.
      </p>

      <p className="text-lg mb-4">
        Founded with the belief that information should be accessible and empowering, NewsExtra blends real-time updates with thoughtful journalism. Whether you're a casual reader or a news junkie, our interface makes it easy to stay in the know.
      </p>

      <p className="text-lg mb-4">
        Our mission is simple: deliver accurate, timely, and relevant news in a clean, user-friendly experience. We value transparency, diversity of perspectives, and the power of storytelling.
      </p>

      <p className="text-lg mb-6">
        From breaking headlines to in-depth features, NewsExtra is your trusted companion in navigating the world’s events.
      </p>

      <div className="text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default About;