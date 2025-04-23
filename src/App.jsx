import { BrowserRouter as Router, Routes, Route, Link } 
        from 'react-router-dom';
import './App.css'
import Home from './routes/Home';
import Detail from './routes/Detail';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Detail id={67710} />}/>
      </Routes>
    </Router>
  )
  
}

export default App
