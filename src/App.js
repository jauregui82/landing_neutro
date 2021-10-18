// import logo from './logo.svg';
import './App.css';
import Main from 'src/components/main/main';
// import Video from 'src/components/video/video';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';

function App() {
  return (
    <Main>
      {/* section 1 */}
      {/* <Video/> */}
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>

    </Main>
  );
}

export default App;
