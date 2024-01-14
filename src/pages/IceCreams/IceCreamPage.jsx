import ListPage from '@/components/ListPage';
import { iceCreamList } from '@/constants/app';
import Layout from '@/layouts/Layout';
import React from 'react';

function IceCreamPage() {
  return <Layout title={'Ice-Creams'}>
     <div className="mt-4">
        <h1 className="text-3xl font-bold border-b-2 pb-4 mt-10">Ice-Cream Menu</h1>
        <ListPage list={iceCreamList} />
      </div>
  </Layout>;
}

export default IceCreamPage;
