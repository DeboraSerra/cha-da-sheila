import './App.css';
import Router from './routes';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
