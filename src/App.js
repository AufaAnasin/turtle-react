import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Insert from './components/Insert';
import Layout from './components/Layout';

function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='insert' element={<Insert />} />
        </Route>
      </Routes>
      </>
  );
}

export default App;
