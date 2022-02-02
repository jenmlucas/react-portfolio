import React, { useState } from 'react';
import Nav from "../Nav/Nav";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/AllProjects";


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About></About>;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio></Portfolio>;
    }
    if (currentPage === 'Contact') {
      return <Contact></Contact>;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
      {renderPage()}
    </div>
  );
}