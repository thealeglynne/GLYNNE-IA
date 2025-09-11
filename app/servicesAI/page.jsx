"use client";

import React from 'react';
import Header  from '../components/header';
import Main1 from './componentes/main1'
import RedirectServices from './componentes/redirecServises'
import Videoss from './componentes/videos'
import Info from './componentes/info'
import Footer from '../components/footer';

export default function Page() {
  return (
    <div>
    <Header />
    <Main1 />

    <Info />
    <RedirectServices />
     <Videoss />

     <Footer />
    </div>
  );
}