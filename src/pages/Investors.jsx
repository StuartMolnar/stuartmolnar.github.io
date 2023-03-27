import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import '../styles/investors.css';


const Investors = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  const sharesStructureRef = useRef();

  const scrollToShares = (e) => {
    e.preventDefault();
    sharesStructureRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout setNavbarHeight={setNavbarHeight}>

      {/* header section */}
      <section className="investors-header-bg px-32 py-32 2xl:py-48"
        style={{ marginTop: `${navbarHeight}px` }}>
        <h1 className="text-page-header font-semibold">
          Investors
        </h1>
        <a className="read-more-btn pt-16" onClick={scrollToShares}>Read More ▸</a>
      </section>

      {/* share structure section */}
      <section ref={sharesStructureRef} className="share-structure mx-auto max-w-[1200px] pt-24">
        <h2 className="text-section-header-lg font-semibold">
          Share Structure
        </h2>
        <div className="w-full flex gap-x-6 mx-auto justify-center text-black pt-16">
          <div className="flex-row share-card w-1/3 bg-white rounded-2xl p-8 text-center">
            <h2 className="text-section-header-lg text-gold font-semibold">
              11,396,000
            </h2>
            <p className="text-content-20 font-semibold">
              Issued & Outstanding
            </p>
          </div>
          <div className="flex-row share-card w-1/3 bg-white rounded-2xl p-8 text-center">
            <h2 className="text-section-header-lg text-gold font-semibold">
              6,796,000
            </h2>
            <p className="text-content-20 font-semibold">
              Warrants Outstanding
            </p>
          </div>
          <div className="flex-row share-card w-1/3 bg-white rounded-2xl p-8 text-center">
            <h2 className="text-section-header-lg text-gold font-semibold">
              18,192,000
            </h2>
            <p className="text-content-20 font-semibold">
              Fully Diluted
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center pt-28 pb-20">
        <img src="src\assets\investors\investors-stock-info.png" className="" alt="" />
      </div>


        
      {/* corporate presentation section */}
      <section className="pdf-frame flex flex-col justify-center items-center mx-16">
        <div className="flex max-w-[1200px] w-full justify-between">
          <h2 className="text-section-header-lg font-semibold">
            Corporate Presentation
          </h2>
          <a href="./src/assets/ws-deck.pdf" className="flex items-center" download>
            <button className="button-primary">Download Presentation</button>
          </a>

        </div>
        <iframe src={'src/assets/ws-deck.pdf'} title="PDF Viewer" className="border-none 2xl:h-[700px] h-[500px] max-w-[1200px] w-full mt-16 mb-24"></iframe>
      </section>




    </Layout>
  );
};

export default Investors;
