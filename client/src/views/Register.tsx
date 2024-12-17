import { Link, useNavigate } from "react-router-dom"

function NavBar(){
  const navigate = useNavigate();
  return(
    <nav className="pe-12 ps-5 justify-between items-center flex">
      <img src="/Netflix_Logo_RGB.png" alt="Logo de Netflix" className="w-52 cursor-pointer" onClick={() => navigate('/')}/>
      <Link to='/login' className="hover:underline font-semibold text-xl text-gray-900">Iniciar sesión</Link>
    </nav>
  )
}
function Form(){
  const inputStyle = "px-2 py-4 border focus:border-blue-600 border-gray-500 mb-2 block w-full rounded-sm";
  const pStyle = "text-lg text-[#363636]"
  return(
    <div className="h-[402px] w-[455px] mx-auto mt-12">
      <h1 className="font-semibold text-[2.1rem] leading-tight mb-2 text-gray-800">Crea una contraseña para <br /> que comiences tu membresía</h1>
      <p className={pStyle}>¡Unos pasos más y listo!</p>
      <p  className={[pStyle, "mb-4"].join(" ")}>Tampoco nos gustan los trámites.</p>
      <form>
        <input type="email" placeholder="Email" className={inputStyle}/>
        <input type="password" placeholder="Agrega una contraseña" className={inputStyle}/>
        {/* Arreglar color más vívido */}
        <button type="submit" className="rounded-[4px] text-2xl bg-red-600 hover:bg-red-500 mt-2 w-full py-4 text-white">Siguiente</button>
      </form>
    </div>
  )
}
function Register() {
  return (
    <div className="h-screen bg-[#fefefe]">
      <NavBar/>
      <hr />
      <Form />
    </div>
  )
}

export default Register