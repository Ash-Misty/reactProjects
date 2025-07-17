import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>< Link to="/" >Home</Link></li>
        <li>< Link to="/about" >About</Link></li>
        <li>< Link to="/contact" >Contact</Link></li>
        <li>< Link to="/user/1" >User 1</Link></li>
        <li>< Link to="/user/2" >User 2</Link></li>
        <li>< Link to="/book/old-books" >Old Books</Link></li>
        <li>< Link to="/book/new-books" >New Books</Link></li>
        <li>< Link to="/login" >Login</Link></li>
        <li>< Link to="/dashboard" >Dashboard</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="/about" element={ <About/>}/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/user/:id" element={ <Profile/>}/>
        <Route path="/login" element={ <Login/>}/>
        <Route path="/dashboard" element={ <Dashboard/>}/>
        <Route path="/book">
          <Route path="new-books" element={<NewBooks/>}/>
          <Route path="old-books" element={<OldBooks/>}/>
        </Route>
        
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
