import React from 'react';
import styled from 'styled-components';

const Copyright = React.memo(() => {
  return <Wrapper>Copyright &copy; 2019 Robert Messerle.</Wrapper>;
});

const Wrapper = styled.div`
  font-family: var(--body-font);
  text-align: center;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  padding: 50px 0;
  letter-spacing: 4px;
  opacity: 0.5;
  color: var(--lighter-blue);
  font-size: 10px;
  text-transform: uppercase;
`;

export default Copyright;
