import { useState } from 'react';
import styled from 'styled-components';
import Input from './input';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    max-width: 200px;
  }
`;

export default function Form() {
  const [commodity, setCommodity] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleClick = () => {
    console.log(`Lets buy ${quantity} ${commodity} at ${price} per kilo`);
  };

  return (
    <FormContainer>
      <Input name='commodity' onChange={setCommodity} />
      <Input name='price' onChange={setPrice} />
      <Input name='quantity' onChange={setQuantity} />
      <button onClick={handleClick}>Submit</button>
    </FormContainer>
  );
}
