import React from "react";
import { Helmet } from "react-helmet";
import {
  FaNewspaper,
  FaClock,
  FaBullhorn,
  FaCamera,
  FaPenFancy,
  FaBroadcastTower,
  FaUsers,
} from "react-icons/fa";

function Services() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Helmet>
        <title>Services | NewsExtra</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6 text-center">Our Services</h1>

      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <FaNewspaper className="text-blue-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">News Aggregation</h2>
            <p>We gather news from multiple reliable sources to keep you informed.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaClock className="text-green-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Real-Time Updates</h2>
            <p>Stay ahead with live updates on trending stories and breaking news.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaBullhorn className="text-purple-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Advertising & Partnerships</h2>
            <p>Collaborate with us to promote your brand through strategic media placements.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaCamera className="text-pink-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Photography</h2>
            <p>Professional photo coverage for events, interviews, and editorial content.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaPenFancy className="text-yellow-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Journalism & Editorial</h2>
            <p>Original reporting, feature writing, and investigative journalism by our team.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaBroadcastTower className="text-red-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Event Coverage</h2>
            <p>Live reporting and multimedia coverage of major events and conferences.</p>
          </div>
        </li>

        <li className="flex items-start gap-4">
          <FaUsers className="text-indigo-600 text-2xl mt-1" />
          <div>
            <h2 className="font-semibold text-lg">Community Engagement</h2>
            <p>We spotlight local voices, stories, and initiatives that matter to your audience.</p>
          </div>
        </li>
      </ul>

      <p className="mt-8 text-center text-lg">
        Want to collaborate or learn more?{" "}
        <a href="/contact" className="text-blue-500 underline hover:text-blue-700">
          Reach out to us today
        </a>.
      </p>
    </div>
  );
}

export default Services;