import './App.css';
import Footer from './common/Footer';
import AnalysisApi from './components/home/AnalysisApi';
import DataSecurity from './components/home/DataSecurity';
import Faq from './components/home/Faq';
import HeadlessSearch from './components/home/HeadlessSearch';
import Hero from './components/home/Hero';
import KeySemanticsWork from './components/home/KeySemanticsWork';

function App() {
  return (
   <>
   <Hero/>
   <KeySemanticsWork/>
   <AnalysisApi/>
   <Faq/>
   <HeadlessSearch/>
   <DataSecurity/>
   <Footer/>
   </>
  );
}

export default App;
