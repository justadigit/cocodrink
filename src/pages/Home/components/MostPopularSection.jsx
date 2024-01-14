import ListPage from '@/components/ListPage';
import { drinkList, iceCreamList } from '@/constants/app';
import React from 'react'

function MostPopularSection() {
  const drinkArr = drinkList.slice(0, 5);
  const iceCreamArr = iceCreamList.slice(0, 5);
  return (
    <div className="mt-4">
        <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10">
          Most Popular
        </h1>
        <ListPage list={drinkArr} />
        <ListPage list={iceCreamArr} />
      </div>
  )
}

export default MostPopularSection