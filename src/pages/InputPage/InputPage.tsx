import React, { useState } from 'react';
import styled from 'styled-components';
import useInput from '../Hook/useInput';

export default function InputPage() {
  const name = useInput('Mr..');
  return (
    <Wrapper>
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
      <input placeholder="Name" {...name} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
