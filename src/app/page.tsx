'use client';
import ScrollSpy from 'react-ui-scrollspy';
import About from './about/page';
import Blog from './blog/page';
import Contact from './contact/page';
import Home from './home/page';
import Portfolio from './portfolio/page';
import Services from './services/page';

export default function App() {
  // TODO: Fix styles not applying to sidebar with scrollspy
  return (
    <main className='main-wrapper'>
      <ScrollSpy
        scrollThrottle={200}
        offsetBottom={300}
        updateHistoryStack={false}
      >
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </ScrollSpy>
    </main>
  );
}
