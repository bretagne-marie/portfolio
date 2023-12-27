import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/nav.component'
import About from './routes/about.component';
import Blog from './routes/blog.component';
import Services from './routes/services.component';
import Home from './routes/home.component';
import Header from './components/header.component';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
