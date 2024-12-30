import React, { useState, useEffect } from 'react';


const News = () => {
  const [articles, setArticles] = useState([]);

  // Mengambil berita olahraga menggunakan News API
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=badminton&apiKey=329727213b164554a78b081d48be8904`)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h3>Badminton News</h3>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
