//App.jsx
import React from 'react';
import HallifaxSparePartsCenter from './HallifaxSparePartsCenter';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Halifax Spare Parts Center</h1>
      <HallifaxSparePartsCenter isOpen={true} additionalStock={true} />
    </div>
  );
};

export default App;