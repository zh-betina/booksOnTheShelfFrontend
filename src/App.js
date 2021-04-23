import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Views from './pages/Views';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Views />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
