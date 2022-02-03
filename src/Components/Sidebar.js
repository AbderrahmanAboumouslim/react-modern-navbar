import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import DisplayData from "./DisplayData";
import { useGlobalContext } from "../Context/Context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <Modal isSidebarOpen={isSidebarOpen}>
      <Screen>
        <X onClick={closeSidebar}>
          <FaTimes />
        </X>
        <DisplayData />
      </Screen>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  visibility: ${(props) => (props.isSidebarOpen ? "visible" : "hidden")};
  z-index: ${(props) => (props.isSidebarOpen ? 5 : -1)};
  transform: ${(props) => (props.isSidebarOpen ? "scale(1)" : "scale(0)")};

  @media (min-width: 800px) {
    display: none;
  }
`;

const Screen = styled.div`
  width: 90vw;
  height: 95vh;
  max-width: 1070px;
  background: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 4rem 2rem;
`;

const X = styled.div`
  font-size: 2rem;
  color: gray;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

export default Sidebar;
