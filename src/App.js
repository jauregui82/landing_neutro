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
import Section2Mobile from './components/section2-mobile/section2-mobile';
import Section4Mobile from './components/section4-mobile/section4-mobile';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SectionCarousel from './components/carousel/carousel';

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Main>
      {/* section 1 */}
      {/* <Video/> */}
      <Section1/>
      {matches ? <Section2/> : <Section2Mobile />}
      <Section3/>
      {matches ? <Section4/> : <Section4Mobile />}
      <Section5/>
      {matches ? <Section6/> : <SectionCarousel />}
      {/* <Section6/> */}

    </Main>
  );
}

export default App;
