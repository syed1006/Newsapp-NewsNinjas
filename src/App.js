import './App.css';
import Navbar from './components/navbar/Navbar';
import NewsContainer from './components/news-container/NewsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<NewsContainer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
