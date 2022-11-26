
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Firstscreen from './Component/Firstscreen';
import Secondpage from './Component/Secondpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Firstscreen/>} />
        <Route path="/second" element={<Secondpage/>} />
      </Routes>
    </div>
  );
}

export default App;
