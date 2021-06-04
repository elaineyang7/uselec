import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  footer {
  width: 100%;
  height: 72px;
  position: relative;
  text-align: center;

  span {
    font-size: 10px;
    position: relative;
    top: 31px;
  }
}
`

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <span>© 2021 Uselec | All rights reserved</span>
      </footer>
    </StyledFooter>
  );
}

export default Footer;