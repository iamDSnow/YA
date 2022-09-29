import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
const Active = styled.div`
/* 
  padding-top: 24px;
  width: 100vw;
  height: 100vh; */

  /* Background Color */
 
  a {
    text-decoration: none;
    /* keep this */
    /* Font Options */
   
    /* Tablet */
    @media only screen and (min-width: 600px) {
     
    }
    /* Desktop */
    @media only screen and (min-width: 900px) {
  
    }
  }
  display: ${(props) => (props.active ? "display" : "none")};
`;

function MobileNav({ children, active }) {
  return (
    <Wrapper>
      <Active active={active}>
        {children}
      </Active>
    </Wrapper>
  );
}

export default MobileNav;