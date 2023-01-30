
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbara from './component/Navbar/Navbar';
import First from './component/Part/First';
import Second from './component/Part/second';

function App() {
  return (
    <>
      <Navbara/>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </>
  );
}

export default App;
