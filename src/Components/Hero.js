import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import phone from "../assets/phone.svg";
import hero from "../assets/hero.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <Screen onMouseOver={closeSubmenu}>
      <Container>
        <Text>
          <h1>manage all your data in one place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ipsam aliquam illo, asperiores aspernatur possimus reiciendis sit
            dicta repudiandae vitae! Impedit vero, laudantium accusamus
            explicabo quis rerum. Repellat, laborum asperiores?
          </p>
          <button>start now</button>
        </Text>
        <Image>
          <img src={phone} alt="phone" />
        </Image>
      </Container>
    </Screen>
  );
};

const Screen = styled.div`
  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65%;
    top: 0;
    left: 0;
    background: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;

    @media (min-width: 800px) {
      background-size: contain;
      height: 100%;
    }
  }
`;

const Container = styled.div`
  width: 90vw;
  max-width: 1070px;
  display: grid;
  align-items: center;

  @media (min-width: 800px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1200px) {
    align-items: end;
    padding-bottom: 12vh;
  }
  @media (min-width: 1400px) {
    padding-bottom: 20vh;
  }
`;
const Text = styled.div`
  h1 {
    text-transform: none;
    max-width: 500px;
    margin-bottom: 2rem;
  }

  p {
    max-width: 35em;
    line-height: 1.8;
  }

  button {
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.25rem;
    border-color: transparent;
    color: white;
    background: #222;
    cursor: pointer;
    transition: all 0.3s linear;
  }
`;
const Image = styled.div`
  display: none;
`;

export default Hero;
