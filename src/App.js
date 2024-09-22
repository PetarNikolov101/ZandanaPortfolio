import './App.css';
import CustomNavbar from './CustomNavbar';
import About from "./About"
import Events from './Events';
import Games from './Games';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax, ParallaxLayer} from '@react-spring/parallax'

export default function App() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <About></About>
    <Events></Events>
    <Games></Games>
    <Contact></Contact>
    </>
  );
}
