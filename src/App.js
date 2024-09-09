import './App.css';
import BStep from './bookingSteps/BStep';
import GradientBackground from './Gredient/GradientBackground';
import Choose from './whyChooseUs/ChooseUs';
import Testimonial from './Testimonial/Testmonial';

function App() {
  return (
    <div className="App">
      <GradientBackground/>
      <div>{<Choose/>}</div>
      <div>{<BStep/>}</div>
      <div>{<Testimonial/>}</div>
    </div>
  );
}

export default App;
