import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Brevard from './pages/Brevard'
import Asheville from './pages/Asheville'
import Greenville from './pages/Greenville'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Confetti from 'react-confetti'

function App() {
  return (
  <>
  <BrowserRouter>
    <div className="App bg">
      <Confetti className='confetti'/>
    </div>
      <Header />
      <Route exact path='/' component={Home} />
          <Route exact path='/brevard' component={Brevard} />
          <Route exact path='/asheville' component={Asheville} />
          <Route exact path='/greenville' component={Greenville} />
          <Route exact path='/about' component={About} />
      <Footer />
  </BrowserRouter>
    </>
  );
}

export default App;
