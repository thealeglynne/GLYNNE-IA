"use client";

import React from 'react';
import Header  from '../components/header';
import Main1 from './componentes/main1'
import RedirectServices from './componentes/redirecServises'
import Videoss from './componentes/info_new_produt'
import Info from './componentes/info'
import Footer from '../components/footer';
import TextImageSection from './componentes/imgAndText';

export default function Page() {
  return (
    <div>
    <Header />
    <Main1 />
    <TextImageSection />
    <Info />
   
     <Videoss />


     <Footer />
    </div>
  );
}