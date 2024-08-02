// App.jsx
import React from 'react';
import { HallifaxSparePartsCenter } from './HallifaxSparePartsCenter.jsx';

function App = () => {
  return (
    <div>
      <h1>Welcome to the Halifax Spare Parts Center</h1>
      <HallifaxSparePartsCenter isOpen={true} additionalStock={True} />
    </div>
  );
};

export default App;