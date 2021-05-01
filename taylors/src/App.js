import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <div className="App bg"></div>
      <Header />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
