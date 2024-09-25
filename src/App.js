import './App.css';
import CustomNavbar from './CustomNavbar';
import About from "./About"
import Events from './Events';
import Games from './Games';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <>
    <CustomNavbar></CustomNavbar>
    <div id="bdy">
    <About></About>
    <Events></Events>
    <Games></Games>
    </div>
    <Contact></Contact>
    </>
  );
}
