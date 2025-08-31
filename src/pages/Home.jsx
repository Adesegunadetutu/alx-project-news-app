import React, { useState, useEffect } from "react";
import { fetchNewsByCategory } from "../api/newsApi";
import NewsCard from "../components/NewsCard";

// Import slideshow images
import slide1 from  "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

const categories = ["general", "sports", "business", "technology", "health"];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [news, setNews] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    fetchNewsByCategory(selectedCategory).then(setNews);
  }, [selectedCategory]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-left mt-10 mb-6">
        <input
          type="text"
          placeholder="Search News"
          className="w-full sm:w-100 px-4 py-2 border rounded-md"
        />
      </div>

      <h1 className="text-2xl font-bold mb-4">Top News</h1>

      {/* Slideshow */}
      <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentSlide ? "bg-white" : "bg-white opacity-50"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Category Buttons */}
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

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, idx) => (
          <NewsCard key={idx} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Home;