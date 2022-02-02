import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { useGlobalContext } from "../Context/Context";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();
  return (
    <Nav>
      <Container>
        <Header>
          <img src={logo} alt="logo" />
          <button onClick={openSidebar}>
            <FaBars />
          </button>
        </Header>
        <Links>
          <li>
            <button>company</button>
          </li>
          <li>
            <button>products</button>
          </li>
          <li>
            <button>docs</button>
          </li>
        </Links>
        <Signin>sign in</Signin>
      </Container>
    </Nav>
  );
};

const Nav = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;
`;
const Container = styled.div`
  width: 90vw;
  max-width: 1070px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: #222;
    cursor: pointer;
    transition: all 0.3s linear;

    @media (min-width: 800px) {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: block;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  height: 100%;
  display: grid;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }

  li {
    list-style-type: none;

    height: 100%;
  }

  button {
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: all 0.3s linear;
    height: 100%;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    color: white;
    text-transform: capitalize;
    letter-spacing: 1px;
    width: 10rem;

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const Signin = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  border-color: transparent;
  color: white;
  background: #222;
  cursor: pointer;
  transition: all 0.3s linear;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default Navbar;
