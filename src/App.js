import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import Views from './Views/Views';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Views />
      </div>
    </BrowserRouter>
  );
}

export default App;
