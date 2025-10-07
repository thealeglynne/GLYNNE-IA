"use client";

import React from 'react';
import Header  from '../components/header';
import Main1 from './componentes/main1'
import RedirectServices from '../components/mainCards'
import Videoss from './componentes/info_new_produt'
import Info from './componentes/info'
import Footer from '../components/footer';
import TextImageSection from './componentes/imgAndText';
import TextImageSection2 from './componentes/imganndtext2';
import Videos2 from './componentes/DBimg'
export default function Page() {
  return (
    <div>
    <Header />
    <Main1 />
    <TextImageSection />
    <Info />
   
    <Videos2 />
    
     <TextImageSection2 />
       <Videoss />
       <RedirectServices />
     <Footer />
    </div>
  );
}