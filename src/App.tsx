import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import SmallFooter from './components/SmallFooter';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import GlobalStyles from './GlobalStyles';
import ScrollToTop from './components/ScrollToTop';
import Search from './components/Search';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-top: 100px;
`;

const FooterWrapper: React.FC = () => {
  const location = useLocation();
  return location.pathname === '/' ? <Footer /> : <SmallFooter />;
};

const App: React.FC = () => {

  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Header />
        <ScrollToTop/>
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </ContentWrapper>
        <FooterWrapper />
      </AppContainer>
    </Router>
  );
};

export default App;