import { Routes, Route } from 'react-router-dom'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Information } from './components/Information';
import { Navbar } from './components/Navbar';
import { PageNotFound } from './components/PageNotFound';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/information' element={<Information />} />
        {/* <Route path='/navbar' element={<Navbar />}></Route> */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
