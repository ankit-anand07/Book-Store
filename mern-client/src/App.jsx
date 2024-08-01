import './App.css';
import MyFooter from './components/MyFooter';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Outlet/>
      </div>
      <MyFooter/>
    </div>
  );
}

export default App;

