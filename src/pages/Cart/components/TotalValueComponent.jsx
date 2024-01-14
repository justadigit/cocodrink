import React from 'react';

function TotalValueComponent({ totalName, totalValue, last = false }) {
  return (
    <div
      className={`py-4 flex flex-row items-center justify-between font-semibold text-xl ${
        last ? 'text-blue-600' : ' border-b-2'
      }`}
    >
      <span>{totalName}</span>
      <span>
        {totalValue} {totalName.includes('Cost') && '$'}
      </span>
    </div>
  );
}

export default TotalValueComponent;
