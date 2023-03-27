import React, { useState, useRef } from 'react';
import Layout from './Layout';
import Modal from '../components/Modal/Board-Modal'; 
import '../styles/board.css';
import boardMembers from '../data/board-members.json';

const Board = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  const boardMembersRef = useRef();

  const scrollToBoardMembers = (e) => {
    e.preventDefault();
    boardMembersRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
      <Layout setNavbarHeight={setNavbarHeight}>

      <Modal isOpen={!!selectedMember} onClose={closeModal} member={selectedMember || {}} />

      <div>
        {/* header section */}
        <section className="board-header-bg px-32 py-44 2xl:py-64"
                style={{ marginTop: `${navbarHeight}px` }}>
          <h1 className="text-page-header font-semibold">
            Meet our board
          </h1>
          <a className="read-more-btn" onClick={scrollToBoardMembers}>Read More ▸</a>
          
        </section>

        {/* member cards section */}
        <section className="board-section-bg text-white">
          <div ref={boardMembersRef} className="board-members p-20 flex justify-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 justify-center">
              {boardMembers.map((member, index) => (
                <div key={index} className="bg-black p-4 rounded-2xl opacity-90 shadow max-w-[600px]">
                  <div className="card-content p-8 flex flex-col h-full justify-between opacity-150">
                    <div>
                      <h3 className="text-card-header font-bold">{member.name}</h3>
                      <p className="text-card-subheader font-bold text-gold mt-2">{member.role}</p>
                      <p className="text-card-subheader font-light mt-8">{member.description}</p>
                    </div>
                    <div>
                      <hr className="my-12" />
                      <a className="read-more-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal(member);
                          }}>
                          Read More ▸
                        </a>
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

export default Board;
