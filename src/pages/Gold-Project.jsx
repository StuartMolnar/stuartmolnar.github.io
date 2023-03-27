import React, { useRef, useEffect, useState } from 'react';
import Layout from './Layout';
import '../styles/gold-project.css';
import Overview from './Overview';


const GoldProject = () => {

  const [navbarHeight, setNavbarHeight] = useState(0);

  const overviewRef = useRef();

  const scrollToOverview = (e) => {
    e.preventDefault();
    overviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout setNavbarHeight={setNavbarHeight}>
    {/* header section */}
    <section className="projects-header-bg flex-row px-32 2xl:py-32"
            style={{ marginTop: `${navbarHeight}px` }}>
      <h1 className="text-page-header font-semibold w-1/2 pt-12">
        The Western Star Project
      </h1>
      <p className="pt-20 xl:w-[35%] w-1/2">
        The Western Star Project consists of intensely deformed, stratiform type deposits consisting of siderite and mineralized quartz formations with pyrite, galena, and sphalerite that are typically localized along steeply dipping, limestone chlorite schist contacts.
      </p>
      <div className="read-more-btn pt-16 pb-32" onClick={scrollToOverview}>Read More ▸</div>
    </section>

    {/* overview section */}
    <section ref={overviewRef} className="flex-row mx-32">
        <h2 className="text-section-header-lg font-semibold pt-24">
            Overview
        </h2>
        <div className="flex w-full gap-8 pt-12">
            <div className="flex-row w-1/3 bg-white rounded-2xl p-12">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Location
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>The Western Star Property is in the peri-cratonic southern Kootenay terrane of the Canadian Cordillera.</li>
                    <li>This terrane is an arc-shaped region in southeastern Canada.</li>
                </ul>
            </div>
            <div className="flex-row w-1/3 bg-white rounded-2xl p-8">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Surface Area
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>The Kootenay Terrane is an arc-shaped belt of stratigraphy spanning 400 km.</li>
                    <li>It has correlating stratigraphy and is 10-50 km wide.</li>
                    <li>The trend is observed from Washington State to British Columbia.</li>
                    <li>The belt width varies, but generally stays within 10-50 km.</li>
                </ul>

            </div>
            <div className="flex-row w-1/3 bg-white rounded-2xl p-8">
                <h3 className="text-section-subheader font-semibold text-gold">
                    Geology & Mineralization
                </h3>
                <ul className="list-disc list-inside text-black pt-8 space-y-2">
                    <li>Mining records from 1895-1915 show sigificant mining history.</li>
                    <li>Historic mineralization is described as veins ranging from 1 to 10m wide.</li>
                    <li>Mineralization has been traced intermittently over strike lengths up to 6.2km.</li>
                </ul>
            </div>
        </div>

    </section>

    {/* info section */}
    <section className="info-section flex py-32 text-black min-h-[800px]">
    <div className="w-[65%] bg-light-blue flex items-center justify-center">
        <p className="p-32">
            Mineralization consists of <span className="font-semibold">galena-sphalerite-chalcopyrite</span> in concordant to irregular quartz-chlorite veins in shears at the limestone phyllite contact and in fractured and/or brecciated ankeritic limestone. Rock samples returned up to <span className="font-semibold">8.22 g/t gold, 246.76 g/t silver, 3.68% copper, and 50.1% lead</span>.
        </p>
    </div>
    <div className="info-section-img w-[35%]"></div>
    {/* <img src="src\assets\gold-project\info-section-right.JPG" alt="" className="w-full max-w-[800px] object-cover object-center" /> */}
</section>


    {/* exploration section */}
    <section className="exploration-section flex-row mx-32">
        <h2 className="text-section-header-lg font-semibold">
            Exploration
        </h2>
        <div className="pt-16">
            <div className="grid grid-cols-11 text-gold font-semibold">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Sample ID</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Description</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Au g/t</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">Ag g/t</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">CH-LC-01</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Representative grab sample of 0.5 to 1.5-meter wide quartz-sericite-chloritevein containing traces of malachite staining (bedding plane fault).</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">2.04</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">40954</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Sulphide lens 2 inches wide near northeast contact.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">8.22</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">264.76</div>
                </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">GR-LX87-02</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite min within siderite-ankerite.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">1.78</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">3.0</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">DN-011</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">ConGrab sample 1-2 m wide quartz vein. Note: 0.07% copper.tent</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">1.81</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">0.17</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">34993</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample from dump at portal of Scout Adit, massive white quartz with coarsegrained galena, pyrite.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">2.61</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">3.2</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">20021</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Pyrite-sphalerite min within siderite-ankerite alteration zone.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">-</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">16953</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Grab sample of quartz-siderite fracture filling with galena, sphalerite, tetrahedrite.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">5.95</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">170.3</div>
            </div>
            <div className="grid grid-cols-11">
                <div className="col-span-1 border border-black p-2 flex items-center px-4">40951</div>
                <div className="col-span-8 border border-black p-2 flex items-center px-4">Channel sample across 2.0-meter-wide pyrite-siderite zone.</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">2.21</div>
                <div className="col-span-1 border border-black p-2 flex items-center px-4">0.07</div>
            </div>
        </div>
        

    </section>

    {/* map section */}
    <section className="map-section p-32 flex justify-center">
        <img src="src\assets\gold-project\map.png" className="w-full max-w-[1750px] object-cover" alt="" />
    </section>

    {/* mineralization section */}
    <section className="mineralization-section p-32 bg-dark-blue flex gap-24">
        <div className="floating-rock-image min-w-[250px] flex items-center justify-center">
            <img src="src\assets\gold-project\rock.png" className="animate-rotation" alt=""/>
        </div>
        <div className="flex-row">
            <h2 className="text-section-header-md font-semibold pb-12">
                Mineralization
            </h2>
            <p className="py-4">
                Recent exploration indicates that the mineralization is a control of syngenetic distal volcanic Carbonate Replacement Deposit (CDR) mineralization likely to be a combination of <span className="text-gold font-semibold">structure, lithology</span> and <span className="text-gold font-semibold">stratigraphy</span>. There are three main CRD deposit types: Leadville-type mineralization (LTM), sedimentary exhalative (SEDEX) and Mississippi Valley-type (MVT).
            </p>
            <p className="py-4">
                The sporadic nature of the known mineralization along the favourable contact zones indicates a complex set of parameters governing mineralization.
            </p>
            <ul className="py-4 pl-12 list-disc list-inside space-y-2">
                <li>Sulphide mineralization is stratiform and occurs at the contact between a grey-green phyllite and a limestone</li>
                <li>The massive chlorite and chloritic quartz that occurs along fractures and at the base of mineralization may be hydrothermal in origin</li>
                <li>The pods of disseminated hematite and magnetite that occur at the mineralized horizon are commonly associated with volcanogenic mineralization</li>
            </ul>
            <p className="py-4">
                Pinch outs of the carbonate bank and dolomitized limestone units at the apparent unconformity can be expected to occur at intervals all along the contact to other units. In this area, the unconformity appears in at least three parallel zones or "leads" on the flanks of large northwest trending folds.
            </p>
            <p className="py-4">
                Preliminary exploration of the Western Star Property indicates good potential for the discovery of additional mineralization along the strike extent of the 6.2km mineralized structures.
            </p>
        </div>
    </section>


    {/* sample images section */}
    <section className="m-32 flex -mb-32">
        <div className="flex gap-8 justify-center items-center w-full xl:h-1100[px] h-[800px]">
            <img src="src\assets\gold-project\images-section-left.png" className="rounded-2xl w-[45%] max-w-[900px] h-full object-cover object-top" />
            <img src="src\assets\gold-project\images-section-right.png" className="rounded-2xl w-[55%] max-w-[1100px] h-full object-cover object-center" />
        </div>
    </section>

    </Layout>
  );
};

export default GoldProject;
