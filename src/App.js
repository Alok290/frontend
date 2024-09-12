import './App.css';
import BStep from '../src/bookingSteps/BStep';
import { BrowserRouter as Router, Routes, Route ,useParams } from 'react-router-dom';
import GradientBackground from '../src/Gredient/GradientBackground';
import Choose from '../src/whyChooseUs/ChooseUs';
import Testimonial from '../src/Testimonial/Testmonial';
import Header from   '../src/Header/Header'
import Footer from '../src/Header/Footer'
import NoFile from '../src/Header/NoFile'
import Home from './Home';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BStep" element={<BStep />} />
        <Route path="/GradientBackground" element={<GradientBackground />} />
        <Route path="/Choose" element={<Choose />} />
        <Route path='/Testimonial' element={<Testimonial />}/>
        <Route path='/Header' element={<Header />}/>
        <Route path='/Footer' element={<Footer />}/>



        {/* <Route path='/404_error' element={<NoFile />}/> */}

        <Route path="*" element={<NoFile />} /> {/* This will catch all unmatched routes */}

      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
