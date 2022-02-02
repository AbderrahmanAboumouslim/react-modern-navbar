import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return <Full></Full>;
};

const Full = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: pink;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

export default Hero;
