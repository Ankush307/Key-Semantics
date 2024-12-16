import './App.css';
import Footer from './common/Footer';
import AnalysisApi from './components/home/AnalysisApi';
import Faq from './components/home/Faq';
import Hero from './components/home/Hero';
import KeySemanticsWork from './components/home/KeySemanticsWork';

function App() {
  return (
   <>
   <Hero/>
   <KeySemanticsWork/>
   <AnalysisApi/>
   <Faq/>
   <Footer/>
   </>
  );
}

export default App;
