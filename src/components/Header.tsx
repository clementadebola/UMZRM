import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from '../assets/logo.png';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #003366, #0066cc);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 60px;
`;

const NavItems = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #003366, #0066cc);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    transform: ${(props) =>
      props.isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
    transition: all 0.3s ease-in-out;
    pointer-events: ${(props) => (props.isOpen ? "all" : "none")};
  }
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  margin-left: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0 0;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Church Logo" />
      </Link>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavItems isOpen={isOpen}>
          <NavItem to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavItem>
          <NavItem to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavItem>
          <NavItem to="/services" onClick={() => setIsOpen(false)}>
            Services
          </NavItem>
          <NavItem to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavItem>
          <SearchContainer>
            <SearchInput type="text" placeholder="Search..." />
            <SearchIcon />
          </SearchContainer>
        </NavItems>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
