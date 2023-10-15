import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import { Home } from './pages';
import GammaStatistics from './pages/GamaStats';

function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/gama" element={<GammaStatistics/>}/>

    </Routes>
  );
}

export default App;
