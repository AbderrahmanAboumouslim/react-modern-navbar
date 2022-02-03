import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const centering = useRef();
  const [columns, setColumns] = useState("repeat(2, 1fr)");

  useEffect(() => {
    const submenu = centering.current;
    submenu.style.left = `${location}px`;

    if (links.length === 3) {
      setColumns("repeat(3, 1fr)");
    }

    if (links.length >= 4) {
      setColumns("repeat(4, 1fr)");
    }
  }, [location]);

  return (
    <SubmenuModal isSubmenuOpen={isSubmenuOpen} ref={centering}>
      <h4>{page}</h4>
      <SubmenuLinks columns={columns}>
        {links.map((link, id) => {
          return (
            <a href={link.url} key={id}>
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </SubmenuLinks>
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

const SubmenuLinks = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  gap: 0.25rem 2rem;

  a {
    width: 10rem;
    display: block;
    color: gray;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }

  svg {
    color: #222;
    margin-right: 1rem;
  }
`;

export default Submenu;
