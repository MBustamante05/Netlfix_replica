import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './views/Landing'
import Register from './views/Register'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App