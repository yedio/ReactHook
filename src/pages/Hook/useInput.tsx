import React, { useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    console.log(event.target);
  };

  return { value, onChange };
}
