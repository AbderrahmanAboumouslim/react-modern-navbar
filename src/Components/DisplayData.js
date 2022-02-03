import React from "react";
import styled from "styled-components";
import sublinks from "./data";

const DisplayData = () => {
  return (
    <Sublinks>
      {sublinks.map((sublink, id) => {
        const { page, links } = sublink;
        return (
          <article key={id}>
            <h4>{page}</h4>
            <Links>
              {links.map((link, id) => {
                const { label, icon, url } = link;
                return (
                  <a href={url} key={id}>
                    {icon}
                    {label}
                  </a>
                );
              })}
            </Links>
          </article>
        );
      })}
    </Sublinks>
  );
};

const Sublinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.25rem;

  article {
    margin-bottom: 2rem;
  }
`;

const Links = styled.div`
  a {
    display: block;
    color: gray;
    text-transform: capitalize;
    display: flex;
    align-items: center;
  }

  svg {
    color: grey;
    margin-right: 1rem;
  }
`;

export default DisplayData;
