'use client';

import PopupIntro from './components/PopupIntro';
import Main1 from './components/main1'
import Main2 from './components/main2'
import MainChat from './components/ChatGLY-IA'
import MainCards from './components/mainCards'
import Main4 from './components/main4'
import Main5 from './components/main5'
import Header from './components/header'; // Asegúrate de que la ruta sea correcta según tu estructura

export default function Home() {
  return (
    <PopupIntro>
      <div className="min-h-screen text-white">
        <Header /> {/* El header siempre visible */}
        <Main1 />
        <Main4 />
        <MainChat />
        <MainCards />
        <Main2 />
       
       
       
        <Main5 />
       
      </div>
    </PopupIntro>
  );
}
