import React from 'react';
import Navbar from './Navbar';
import { APP_BG_COLOR } from '@/constants/app';
import useTitle from '@/layouts/hooks/useTitle';
import { APP_NAME } from '@/constants/app';
function Layout({ children, title }) {
  useTitle(`${title} | ${APP_NAME}`);
  return (
    <>
      <Navbar />
      <div
        className={`w-full min-h-screen max-h-full flex flex-col px-40 pt-4 pb-20 ${APP_BG_COLOR}`}
      >
        {children}
      </div>
    </>
  );
}

export default Layout;
