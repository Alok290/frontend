import './App.css';
import BStep from './bookingSteps/BStep';
import GradientBackground from './Gredient/GradientBackground';
import Choose from './whyChooseUs/ChooseUs';
import Testimonial from './Testimonial/Testmonial';
import Service from "./Services/Service";
import Landing from './landingPage/Landing';
function App() {
  return (
    <div className="App">
      <GradientBackground/>
      <div>{<Landing/>}</div>
      {/* <div>{<Service/>}</div> */}
      <div>{<Choose/>}</div>
      <div>{<BStep/>}</div>
      <div>{<Testimonial/>}</div>
    </div>
  );
}

export default App;
