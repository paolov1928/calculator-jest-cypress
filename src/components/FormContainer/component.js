import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

export function FormContainer() {
  const [commodity, setCommodity] = useState('mango');
  const [price, setPrice] = useState('');
  const [tons, setTons] = useState('');
  const [result, setResult] = useState([]);

  const handleClear = () => {
    setCommodity('mango');
    setPrice('');
    setTons('');
  };

  // anti patters
  // doing too much and not returning out of the promises
  // doing too much testing before the MVP

  const handleSubmit = () => {
    fetch('/api/trader')
      .then((res) => res.json())
      .then((data) => {
        return data.filter((data) => data.COMMODITY === commodity);
      })
      .then((filteredData) => {
        const totalCosts = [];

        filteredData.map((c) => {
          const cost = Number(price) + Number(c.VARIABLE_COST);

          totalCosts.push({
            totalCost: cost * tons,
            country: c.COUNTRY,
          });
        });
        
        return totalCosts;
      })
      .then((totalCosts) => {
        const sorted = totalCosts.sort((a, b) => b.totalCost - a.totalCost);
        setResult(sorted);
      });
  };

  return (
    <Container>
      <select onChange={(e) => setCommodity(e.target.value.toLowerCase())}>
        <option defaultValue value='mango'>
          Mango
        </option>
        <option value='Orange'>Orange</option>
      </select>
      <label htmlFor='price'>Price Per Ton</label>
      <input
        type='number'
        id='price'
        name='price'
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor='tons'>Tons</label>
      <input
        type='number'
        id='tons'
        name='tons'
        onChange={(e) => setTons(e.target.value)}
      />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {result &&
          result.map((r) => {
            return (
              <li key={r.totalCost + r.country}>
                {`Country: ${r.country} total cost: ${r.totalCost}`}
              </li>
            );
          })}
      </ul>
    </Container>
  );
}
