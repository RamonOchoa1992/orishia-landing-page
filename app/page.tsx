import Image from 'next/image';
import Divider from './components/common/Divider';
import Header from './components/HeaderSection/Header';
import About from './components/AboutSection/About';
import Details from './components/DetailsSection/Details';
import Automatization from './components/AutomatizationSection/Automatization';
import Plan from './components/PlanSection/Plan';
import Steps from './components/StepSection/Steps';
import Ready from './components/ReadySection/Ready';
import Contact from './components/ContactSection/Contact';
import Footer from './components/FooterSection/Footer';

export default function Home() {
  return (
    <main className='relative w-full bg-[#FFFFFF]'>
      {/* 1. Imagen de fondo principal */}
      <div className='w-full'>
        <Image
          src='/assets/images/landing-background.png'
          alt='Background'
          // Usa números puros aquí (píxeles reales de la imagen)
          width={1920}
          height={12000} // Cambié el '715vh' por un número alto proporcional
          className='w-full h-auto block'
          priority
        />
      </div>

      {/* 2. Capa de contenido */}
      {/* Importante: Mantenemos h-full para que el contenido pueda extenderse */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center'>
        <Header />
        <Divider width={1250} height={2} />
        <Details />
        <About />
        <Automatization />
        <Plan />
        <Steps />
        <Ready />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
