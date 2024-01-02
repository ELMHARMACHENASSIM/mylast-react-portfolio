import { Route, Routes } from 'react-router-dom';
// import AnimatedCursor from 'animated-cursor';

import './index.css';
import Header from './layouts/Header';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Footer from './layouts/Footer';

function App() {
//   const ac = AnimatedCursor()

//   ac.init()
//   let acOptions = {
//     color: '#000',
//     outerAlpha: 1,
//     size: {
//       inner: 10,
//       outer: 40
//     },
//     hoverScale: {
//       inner: 0.9,
//       outer: 1.9
//     },
//     clickScale: {
//       inner: 1.4,
//       outer: 0.1
//     }
//   }
//   // Create Cursor instance
// const cursor = AnimatedCursor(acOptions)
// // Init Cursor
// cursor.init()
  return (
    <>
<Header/>
<Routes>
  <Route path='*' element={ <Error/> } />
  <Route path='/' element={ <Home/> } />
  <Route path='/about' element={ <About/> } />
  <Route path='/skills' element={ <Skills/> } />
  <Route path='/services' element={ <Services/> } />
  <Route path='/works' element={ <Works/> } />
  <Route path='/contact' element={ <Contact/> } />
</Routes>
<Footer/>
<div id="cursor">
  <div id="cursor-outer"></div>
  <div id="cursor-inner"></div>
</div>
    </>
  )
}

export default App;
