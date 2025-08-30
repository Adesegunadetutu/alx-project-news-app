import React, { useState, useEffect } from "react";
import { fetchNewsByCategory } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

const categories = ["general", "sports", "business", "technology", "health"];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNewsByCategory(selectedCategory).then(setNews);
  }, [selectedCategory]);

  // Use the first news item as featured
  const featuredImageUrl = news.length > 0 ? news[0].urlToImage : "";

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-left  mt-10 mb-6">
        
        <input
          type="text"
          placeholder="Search News"
          className="w-full sm:w-100 px-4 py-2 border rounded-md"
        />
      </div>

      <h1 className="text-2xl font-bold mb-4">Top News</h1>

      {featuredImageUrl && (
        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
          <img
            src={featuredImageUrl}
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-white rounded-full opacity-70"
              ></span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 md:gap-10 overflow-x-auto mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-full ${
              selectedCategory === cat
                ? "bg-red-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, idx) => (
          <NewsCard key={idx} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
