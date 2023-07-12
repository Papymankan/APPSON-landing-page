import './App.css';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Features from './components/Features/Features';
import ScreenShots from './components/ScreenShots/ScreenShots';
import Download from './components/Download/Download';
import Pricing from './components/Pricing/Pricing';
import SubForm from './components/SubForm/SubForm';
import Team from './components/Team/Team';
import Numbers from './components/Numbers/Numbers';
import Review from './components/Review/Review';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Features></Features>
      <ScreenShots></ScreenShots>
      <Download></Download>
      <Pricing></Pricing>
      <SubForm></SubForm>
      <Team></Team>
      <Numbers></Numbers>
      <Review></Review>
      <Blogs></Blogs>
      <Contact></Contact>
    </>
  );
}

export default App;
