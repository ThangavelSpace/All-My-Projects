import React, { useState } from 'react';
import styled from 'styled-components';
import Barcode from 'react-barcode';

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const BarcodeGenerator = () => {
  const [barcodeData, setBarcodeData] = useState('123456789');

  const handleDataChange = (event) => {
    setBarcodeData(event.target.value);
  };

  const handleReset = () => {
    setBarcodeData('');
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Enter Barcode Data"
        value={barcodeData}
        onChange={handleDataChange}
      />
      <Barcode value={barcodeData} />
      <hr/>
      <button type="button" onClick={handleReset}>Reset</button>
    </Container>
  );
};

export default BarcodeGenerator;
