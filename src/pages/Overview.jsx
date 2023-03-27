import React, { useState, useEffect, useRef } from 'react';
import Layout from './Layout';
import '../styles/overview.css';

const Overview = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    { title: 'Strong Mining Ecosystem', 
      points: ['• 326 active exploration Projects', '• $660 million exploration spending', 
               '• 1,442,319 meters of drilling', '• 17 operating mines'] },
    { title: 'Geological Potential', 
      points: ['• A diverse range of commodities including precious, base, and industrial metals', 
               '• $12.6 billion in Mineral Production in 2021'] },
    { title: 'Effective Regulations', 
      points: ['• Ranked least risk jurisdiction in 2017 and 2019', 
               '• Seen as a Tier 1 center for geological, financial, environment and social expertise'] },
    { title: 'Lasting Indigenous Partnerships', 
      points: ['• Exploration and mining account for over 2/3 of all Indigenous employment in the sector'] },
    { title: 'Infrastructure For Mining', 
      points: ['• Ocean Ports, Hydroelectric Power, All-season highways'] },
    { title: 'Choice Destination for Responsibility Sources Metals', 
      points: ['• Progressive Climate policies', '• Skilled Labour'] },
    { title: 'In Demand: B.C.’s Abundance of Critical Minerals', 
      points: ['• The province hosts many of the minerals that are projected to be in global high demand'] },
  ];

  const contentRef = useRef([]);

  useEffect(() => {
    contentRef.current.forEach((content, index) => {
      if (content) {
        if (activeAccordion === index) {
          content.style.height = `${content.scrollHeight}px`;
          content.style.padding = ''; // Reset padding to default
          content.style.opacity = '1';
        } else {
          content.style.height = '0';
          content.style.padding = '0';
          content.style.opacity = '0';
        }
      }
    });
  }, [activeAccordion]);

  const [navbarHeight, setNavbarHeight] = useState(0);

  const goalsRef = useRef();

  const scrollToGoals = (e) => {
    e.preventDefault();
    goalsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
  
    {/* header section */}
    <section className="overview-header-bg flex-row px-32 2xl:py-32"
             style={{ marginTop: `${navbarHeight}px` }}>
      <h1 className="text-page-header font-semibold w-1/2 pt-40 ">
        About Western Star
      </h1>
      <p className="pt-20 xl:w-[35%] w-1/2">
        Western Star is a newly listed, tightly held junior mining company that has 100% ownership in the high-grade Western Star Project located in the Revelstoke Mining District of British Columbia.
      </p>
      <a className="read-more-btn pt-16 pb-40" onClick={scrollToGoals}>Read More ▸</a>
    </section>

    {/* our goal section */}
    <section ref={goalsRef} className="flex-row mx-32 pt-24">
      <h2 className="text-section-header-lg font-semibold">
        Our Goal
      </h2>
      <p className="mt-16">
        Western Star is a junior Canadian exploration company which holds a 100% interest in the Western Star Property located near Revelstoke, British Columbia. Our management has a strong track record in the discovery and development of successful exploration projects. The objective is to increase shareholder value through the development of exploration properties, using cost-effective exploration practices, the acquisition of high value exploration properties, and seeking partnerships by either joint venture or sale with industry leaders.
      </p>
      <div className="flex gap-8 justify-center items-center w-full xl:h-900[px] h-[600px] mt-32">
        <img src="src\assets\overview\goal-section-left.png" className="rounded-2xl max-w-[1100px] w-[55%] h-full object-cover object-top" />
        <img src="src\assets\overview\goal-section-right.jpg" className="rounded-2xl max-w-[900px] w-[45%] h-full  object-cover object-center" />
      </div>

    </section>

    {/* why revelstoke section */}
    <section className="flex-row mx-32 mt-40 -mb-48">

      <h2 className="text-section-header-lg font-semibold">
        Why British Columbia?
      </h2>
      <p className="pt-16">
        The Revelstoke Mining District, located within British Columbia, is renowned for its abundant reserves of precious and base metals, including gold, silver, copper, and lead. Western Star's project is situated in a prime location within this district, surrounded by other successful mining operations and well-connected to key infrastructure such as roads, power, and water supply. 
      </p>
      <div className="flex pt-16" style={{alignItems: 'flex-start'}}>
        <div className="flex flex-col justify-center items-start w-full lg:w-auto">
          <img src="src\assets\overview\revelstoke-map.png" className="rounded-3xl min-w-[500px] max-w-[1000px] w-full" alt=""/>
        </div>
        <div className="accordion-container z-10 space-y-8 w-full ml-16">
          {accordionData.map((accordion, index) => (
            <div className={`accordion p-6 rounded-2xl bg-light-blue text-black cursor-pointer select-none ${activeAccordion === index ? 'active' : ''}`} key={index}
            onClick={() => toggleAccordion(index)}>
              <div className="accordion-title flex justify-between">
                <span className="font-semibold text-content-20">{accordion.title}</span>
                <span className="font-semibold text-content-20 transform scale-150">{activeAccordion === index ? '▴' : '▾'}</span>              
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className="accordion-content text-base font-normal"
              >
                {activeAccordion === index && (
                  <ul className="pl-6 pt-2">
                    {accordion.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    </Layout>
  );
};

export default Overview;
