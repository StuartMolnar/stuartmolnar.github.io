import React, { useRef } from 'react';

const Article_1 = ({ navbarHeight, scrollToArticle, article}) => {

    const imgUrl = `src/assets/articles/article-${article.id}/article-header-bg.jpg`;
    
    const headerStyle = {
        backgroundImage: `linear-gradient(99.98deg, rgba(0, 0, 0, 0.8) 8.86%, rgba(0, 0, 0, 0.4) 74.38%, rgba(0, 0, 0, 0) 100%), url('${imgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

  return (
    <>
      {/* header section */}
      <section className="article-header-bg flex-row px-32 py-20 2xl:py-32"
              style={{ ...headerStyle, marginTop: `${navbarHeight}px` }}>
                
        <div className="text-gold font-semibold text-content-20">{article.date}</div>
        <h1 className="text-page-header font-semibold 2xl:w-1/2 pt-6">
          {article.title}
        </h1>
        <div className="read-more-btn pt-16" onClick={scrollToArticle}>Read More ▸</div>
      </section>
    </>
  );
};

export default Article_1;
