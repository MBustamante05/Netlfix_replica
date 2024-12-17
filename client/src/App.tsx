import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './views/Landing'
import Register from './views/Register'
import Home from './views/Home'
import Login from './views/Login'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}

export default App