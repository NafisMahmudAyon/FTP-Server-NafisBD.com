import logo from './logo.svg';
import './App.css';
import FTPList from './components/FTPList/FTPList';
import Parallax from './components/Parallax/Parallax';
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <div className="App">
      <div className='caro'>
        < Carousel />
      </div>
      <div className='Parallax'>
        
        <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-[0_35px_35px_rgba(196,193,8,0.25)] heading-txt'>FTP Server List</h1>
      </div>
      <div className='list'>
        <FTPList />
      </div>
    </div>
  );
}

export default App;
