import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/nav.component'
import About from './routes/about.component';
import Blog from './routes/blog.component';
import Work from './routes/work.component';
import Contact from './routes/contact.component';
import Home from './routes/home.component';
import Header from './components/header.component';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-purple-500 via-pink-300 to-orange-300 bg-cover'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
