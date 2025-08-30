import React from "react";
import { Link } from "react-router-dom";

function NewsCard({ title, description, urlToImage, publishedAt }) {
  return (
    <Link
      to={`/news/${encodeURIComponent(title)}`}
      className="block border rounded overflow-hidden shadow text-gray-700 hover:shadow-lg transition m-2"
    >
      <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between h-52">
        <div>
          <h2 className="font-bold text-lg line-clamp-1">{title}</h2>
          <p className="text-sm mt-2 mb-2 text-green-600">
            {new Date(publishedAt).toLocaleString()}
          </p>
          <p className="mt-2 font-normal line-clamp-3">{description}</p>
        </div>
        {/* Read More */}
        <div className="mt-4 flex items-center text-red-600 font-semibold">
          <span>Read More</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;
