import ListPage from '@/components/ListPage';
import { drinkList } from '@/constants/app';
import Layout from '@/layouts/Layout';
import React from 'react';

function DrinkPage() {
  return (
    <Layout title={'Drink'}>
      <div className="mt-4">
        <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10">Drink Menu</h1>
        <ListPage list={drinkList} />
      </div>
    </Layout>
  );
}

export default DrinkPage;
