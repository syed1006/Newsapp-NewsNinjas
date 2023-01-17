import './App.css';
import Navbar from './components/navbar/Navbar';
import NewsContainer from './components/news-container/NewsContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<NewsContainer category='general'  key='general'/>} />
      <Route exact path='/business' element={<NewsContainer category='business' key='business' />} />
      <Route exact path='/entertainment' element={<NewsContainer category='entertainment' key='entertainment'/>} />
      <Route exact path='/health' element={<NewsContainer category='health' key='health'/>} />
      <Route exact path='/sports' element={<NewsContainer category='sports' key='sports'/>} />
      <Route exact path='/science' element={<NewsContainer category='science' key='science'/>} />
      <Route exact path='/technology' element={<NewsContainer category='technology' key='technology'/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
