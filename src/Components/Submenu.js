import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const centering = useRef();

  useEffect(() => {
    const submenu = centering.current;
    submenu.style.left = `${location}px`;
  }, [location]);

  return (
    <SubmenuModal isSubmenuOpen={isSubmenuOpen} ref={centering}>
      submenu submenu submenu
    </SubmenuModal>
  );
};

const SubmenuModal = styled.div`
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  display: ${(props) => (props.isSubmenuOpen ? "block" : "none")};
  padding: 2rem;
  border-radius: 0.25rem;
  transition: all 0.3s linear;

  &:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Submenu;
