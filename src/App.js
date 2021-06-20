import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Container } from 'reactstrap';



import Navbar from './components/Navbar';
import Main from './components/Main';
import Story from './components/Story';
import Images from './components/Images';
import Handcrafted from './components/Handcrafted';
import Split from './components/Split';
import Footer from './components/Footer';
import Footerend from './components/Footerend';
import Shop from './components/Shop';
import Mainshop from './components/Mainshop';
import Expirience from './components/Expirience';
import Map from './components/Map';
import Contact from './components/Contact';






function App() {
  return (
  <Container className="themed-container" fluid="xl">
    <Router>

    <Navbar /> 
    <Switch>
    <Route path="/" exact>
    <Main />
    <Story /> 
    <Images />
    <Handcrafted />
    <Split />
    <Footer />
    <Footerend />
    </Route>
    <Route path="/shop">
    <Shop />
    <Mainshop />
    <Footer />
    <Footerend />
    </Route>
    </Switch>
    <Route path="/contact">
    <Expirience />
    <Map />
    <Contact />
    <Footer />
    <Footerend />
    </Route>
  
    </Router>
    </Container>
  );
}

export default App;
