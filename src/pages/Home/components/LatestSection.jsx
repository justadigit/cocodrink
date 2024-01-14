import ListPage from '@/components/ListPage';
import { drinkList, iceCreamList } from '@/constants/app';
import React from 'react';

function LatestSection() {
  const drinkArr = drinkList.slice(5, 10);
  const iceCreamArr = iceCreamList.slice(5, 10);
  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10">Latest</h1>
      <ListPage list={drinkArr} />
      <ListPage list={iceCreamArr} />
    </div>
  );
}

export default LatestSection;
