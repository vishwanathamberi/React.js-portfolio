import Home from './home';
import About from'./about';
import{BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Timeline, { Education,Expirence }from './timeline';
import"./style.css"






function Header() {
  return(
    <>
    <div className='nav'>
<u className='nav'>
  <li><Link className='btn btn-primary'  to="/home">Home</Link></li>
  <li><Link className='btn btn-primary'  to="/about">About</Link></li>
  <li><Link className='btn btn-primary'  to="/skills">Skills</Link></li>
  <li><Link className='btn btn-primary'  to="/projects">Projects</Link></li>
  <li><Link className='btn btn-primary'  to="/timeline">Timeline</Link></li>
  <li><Link className='btn btn-primary'  to="/contact">Contact</Link></li>
</u>
<div className='slider'>
<marquee>
  <h3>Hi ! welcome to my website</h3>
</marquee>
</div>


</div>
</>
 )
  
}

function App() {
  return(
  
    <BrowserRouter >
    <Header/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/timeline" element={<Timeline/>}>
        <Route path='Education' element={<Education/>} />
        <Route path='Expirence' element={<Expirence/>} />
      </Route>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
 )
  
}
export default App