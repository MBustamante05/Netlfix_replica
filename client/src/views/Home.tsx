import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/api/users/home')
      .then(res => {
        if(res.data.message !== 'Success!') {
          navigate('/login');
        }
      })
  }, [navigate])
  return (
    <div>Bienvenid@ a Netflix</div>
  )
}

export default Home