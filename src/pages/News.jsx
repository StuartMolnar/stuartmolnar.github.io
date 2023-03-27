import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import '../styles/news.css';
import articles from '../data/articles.json';

const News = () => {
  const reversedArticles = [...articles].reverse();
  const articlesRef = useRef();
  const newsArticlesRef = useRef();

  const [navbarHeight, setNavbarHeight] = useState(0);

  const date = new Date();
  const years = [date.getFullYear(), date.getFullYear() - 1];

  const [selectedYear, setSelectedYear] = useState('all');

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  console.log('reversedArticles', reversedArticles);

  const filteredArticles = (selectedYear == 'all') ? reversedArticles : reversedArticles.filter((article) => article.date?.includes(selectedYear.year));


  const scrollToNews = (e) => {
    e.preventDefault();
    newsArticlesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
        
        {/* header section */}
        <section className="news-header-bg px-32 py-32 2xl:py-48"
                style={{ marginTop: `${navbarHeight}px` }}>
          <h1 className="text-page-header font-semibold">
            News
          </h1>
          <a className="read-more-btn pt-16" onClick={scrollToNews}>Read More ▸</a>
          
        </section>
        

      <div ref={newsArticlesRef} className="news-articles-bg min-h-[800px]">

      
      {/* years section */}
      <section className="years-section text-black text-card-header font-semibold px-40 pt-20 max-w-[1550px] mx-auto">
          <div className="years-container items-start w-full">
              <p className="text-container-header font-semibold">
                  Filter news articles by year
              </p>
              <div className="flex gap-x-4 mt-4">
                <button onClick={() => handleYearClick('all')} 
                className={`${selectedYear === 'all' ? 'year-active' : 'text-light-blue'}`}>All</button>
                {years.map((year) => (
                  <button key={year} onClick={() => handleYearClick({year})} 
                  className={`${selectedYear.year === year ? 'year-active' : 'text-light-blue'}`}>{year}</button>
                ))}

            </div>
          </div>
      </section>


        {/* news cards section */}

        <section className="text-white flex flex-col items-center">

          <div ref={articlesRef} className="news-articles px-20 pb-20 pt-12 flex ">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              {filteredArticles.map((article, index) => (
                <div key={index} className="article-card bg-black p-4 rounded-2xl opacity-90 shadow max-w-[600px]">
                  <div className="card-content p-8 flex flex-col h-full justify-between opacity-150">
                    <div>
                      <h3 className="font-semibold">{article.date}</h3>
                      <p className="text-card-header font-semibold text-gold mt-6">{article.title}</p>
                      <p className="font-light mt-12">{article.content}</p>
                    </div>
                    <div>
                      <hr className="my-12" />
                        <Link to={`${article.url}`} className="read-more-btn">
                          Read More ▸
                        </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </Layout>
  );
};

export { News as default };




