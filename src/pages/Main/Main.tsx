import React from 'react';
import styled from 'styled-components';

import InputPage from '../InputPage/InputPage';

export default function Main() {
  return (
    <Wrapper>
      <InputPage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
