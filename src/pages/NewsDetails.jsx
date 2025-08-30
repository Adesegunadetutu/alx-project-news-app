import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsById } from "../api/newsApi";

function NewsDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (id) fetchNewsById(decodeURIComponent(id)).then(setArticle);
  }, [id]);

  if (!article) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mt-10 lg:px-8">
      <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded mb-4" />
      <h1 className="text-xl font-bold mb-2">{article.title}</h1>
      <p className="text-gray-600 mb-4">{new Date(article.publishedAt).toLocaleString()}</p>
      <p>{article.content}</p>

      
    </div>

    
  );
}

export default NewsDetails;
