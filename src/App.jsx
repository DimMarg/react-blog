import { Route, Routes } from 'react-router-dom';
import Blog from './components/Pages/Blog/Blog';
import Post from './components/Pages/Post/Post';
import NotFoundPage from './components/Pages/NotFound/NotFoundPage';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App
