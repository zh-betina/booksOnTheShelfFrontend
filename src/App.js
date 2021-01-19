import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Views from './Views/Views';
import Footer from './Footer/Footer';

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
