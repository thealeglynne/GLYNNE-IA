'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import Header from './components/header';
import PopupIntro from './components/PopupIntro';
import Main1 from './components/main1';
import AutomationDashboard from './components/dashboard'
import Main4 from './components/main4';
import MainChat from './components/ChatGLY-IA';
import MainCards from './components/mainCards';
import MainLogos from './components/mainlogos';
import Main5 from './components/main5';
import Main6 from './components/main6';
import Footer from './components/footer';
import DashboardExplanation from './components/dashboardExplication';

function AnimatedSection({
  children,
  className = 'h-screen',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: 'easeOut',
          },
        },
      }}
      className={`snap-start ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  return (
    <PopupIntro>
      <div
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white no-scrollbar"
        style={{ scrollSnapType: 'y mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Header fijo */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* Secciones de scroll 100vh + animación */}
        <AnimatedSection>
          <Main1 />
        </AnimatedSection>

        <AnimatedSection>
          <Main4 />
        </AnimatedSection>


        <AnimatedSection>
          <MainChat />
        </AnimatedSection>
  
        <AnimatedSection className="min-h-screen">
          <MainCards />
        </AnimatedSection>

        <AnimatedSection>
          <MainLogos />
        </AnimatedSection>
        <AnimatedSection className="min-h-screen">
          <Main6 />
        </AnimatedSection>
        <AnimatedSection className="min-h-screen bg-white text-black">
  <AutomationDashboard />
</AnimatedSection>
       <AnimatedSection className="min-h-screen">
          <DashboardExplanation />
        </AnimatedSection>
        <AnimatedSection>
          <Main5 />
        </AnimatedSection>

        <AnimatedSection className="h-[50vh]">
          <Footer />
        </AnimatedSection>
      </div>
    </PopupIntro>
  );
}
