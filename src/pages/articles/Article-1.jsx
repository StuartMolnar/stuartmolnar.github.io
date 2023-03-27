import React, { useRef, useEffect, useState } from 'react';
import Layout from '../Layout';
import '../../styles/articles/article-1.css';
import ArticleHeader from '../../components/Article/Article-Header';


import articles from '../../data/articles.json';

// for subsequent articles, change the articleId to the corresponding article id
const articleId = 1;
const article = articles.find((article) => article.id === articleId);


const Article_1 = () => {

  const articleRef = useRef();

  const [navbarHeight, setNavbarHeight] = useState(0); 

  const scrollToArticle = (e) => {
    e.preventDefault();
    articleRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Layout setNavbarHeight={setNavbarHeight}>

      <ArticleHeader navbarHeight={navbarHeight} scrollToArticle={scrollToArticle} article={article} />

      {/* content section */}
      <section ref={articleRef} className="article-content px-32 bg-white text-black min-h-[600px]">
        <h2 className="text-section-header-lg font-semibold">
          Coming Soon
        </h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit sollicitudin consequat. Fusce arcu erat, sollicitudin placerat malesuada facilisis, tempor sed sapien. Nullam turpis odio, efficitur sit amet efficitur eu, pharetra in dolor. Duis pellentesque tincidunt urna nec dapibus. Nunc commodo condimentum augue ac luctus. Fusce elementum et metus accumsan bibendum. Proin at tortor lacus. Sed felis orci, laoreet a semper ut, pulvinar eu tellus. Donec vehicula, ante quis suscipit vehicula, elit lorem auctor neque, in facilisis tellus eros sed risus. Donec molestie egestas odio. Praesent consequat massa a mi venenatis consectetur. Integer sodales, justo rutrum suscipit rutrum, nibh ligula viverra eros, viverra tempus lorem arcu quis tellus.

        Pellentesque id ex fringilla, euismod lectus quis, mattis nisi. Mauris ac ultricies ante. Vestibulum convallis, erat in varius tempor, erat felis luctus turpis, sed mollis nisi massa at elit. Integer sodales diam quis ante placerat, non dignissim arcu cursus. Aenean rhoncus eros mi, et sagittis enim dictum eu. Sed quis sagittis justo. Sed volutpat nunc eget erat vehicula, sed molestie urna suscipit. Quisque vestibulum dapibus magna non cursus. Mauris a viverra erat, non aliquam nisl. Proin condimentum laoreet blandit. Quisque condimentum mauris in commodo bibendum. Nam sed sodales enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas placerat metus a libero cursus, eu feugiat orci fringilla. Proin dignissim arcu non mi egestas viverra. In sit amet luctus felis, non dapibus neque.

        Proin ante tortor, varius vestibulum dictum vitae, ullamcorper nec enim. Pellentesque non dolor eget turpis gravida porta et ac justo. Sed semper lacus dui, ac cursus sapien interdum eget. Sed vitae dapibus justo. Vestibulum a arcu ut ante ornare fringilla nec sit amet purus. Curabitur iaculis mollis auctor. Etiam posuere elit vitae quam maximus, nec consequat nibh condimentum. Nullam eu quam in sapien egestas rutrum. Fusce efficitur a mauris a ornare. Aliquam ante tortor, consectetur eu pulvinar in, mattis sed odio. Nullam cursus pharetra ullamcorper.

        Donec vestibulum molestie pellentesque. Quisque consectetur a dui id ultricies. Maecenas vitae porttitor sapien. Maecenas pretium ante eget laoreet consectetur. Maecenas tempor dictum pharetra. Aliquam accumsan laoreet placerat. Nulla vel ultricies tortor. Maecenas sit amet luctus est. Cras porta elementum accumsan. Duis at purus velit. Vestibulum cursus, nisl eu porta porttitor, felis enim ultricies odio, eget dictum velit enim nec mi. Quisque scelerisque, nulla ac aliquet semper, dui massa rutrum massa, sit amet dignissim turpis elit placerat felis.

        Duis euismod metus at turpis auctor ultrices. In et massa nec quam cursus condimentum. Vivamus posuere orci eu est hendrerit, sed interdum ante auctor. Vivamus ac sagittis felis. Nullam rutrum nulla massa, non cursus enim viverra fermentum. In ante ex, ultrices tristique euismod non, fringilla sit amet justo. Sed ut lobortis leo, eu gravida diam. Phasellus vel vulputate enim, in molestie purus. Integer mollis vel est id mattis. Ut viverra tristique lectus, sodales varius diam dictum sed. Nunc mattis mauris bibendum congue consequat. Aliquam vel tempus velit. Maecenas aliquet eleifend justo a imperdiet. Duis nec maximus augue. Cras et ex in dolor condimentum vehicula. Donec cursus quam elementum lacus porta, varius consequat ipsum egestas.
        </p>
      </section>
    </Layout>
  );
};

export default Article_1;
