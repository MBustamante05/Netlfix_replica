import { Link, useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from "react";
import axios from "axios";

const data = [
  "Preguntas frecuentes",
  "Centro de ayuda",
  "Términos de uso",
  "Privacidad",
  "Preferencias de cookies",
  "Información corporativa",
];
function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="pe-12 ps-5 justify-between items-center flex">
      <img
        src="/Netflix_Logo_RGB.png"
        alt="Logo de Netflix"
        className="w-52 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <Link
        to="/login"
        className="hover:underline font-semibold text-xl text-gray-900"
      >
        Iniciar sesión
      </Link>
    </nav>
  );
}

function Form() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputStyle = `px-2 py-4 border focus:border-blue-600 ${
    error ? "border-red-500" : "border-gray-500"
  }  mt-2 block w-full rounded-sm`;
  const pStyle = "text-lg text-[#363636]";

  axios.defaults.withCredentials = true;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    axios.post('/api/users/signup', { email, password })
      .then(res => {
        console.log(res.data);
        if(res.data === 'Success!'){
          navigate('/home');
        }
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <div className="h-[402px] w-[455px] mx-auto mt-12">
      <h1 className="font-semibold text-[2.1rem] leading-tight mb-2 text-gray-800">
        Crea una contraseña para <br /> que comiences tu membresía
      </h1>
      <p className={pStyle}>¡Unos pasos más y listo!</p>
      <p className={[pStyle, "mb-2"].join(" ")}>
        Tampoco nos gustan los trámites.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error ? (
          <small className="text-red-600">El email es requerido</small>
        ) : (
          ""
        )}
        <input
          type="password"
          placeholder="Agrega una contraseña"
          className={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error ? (
          <small className="text-red-600">La contraseña es requerida</small>
        ) : (
          ""
        )}
        {/* Arreglar color más vívido */}
        <button
          type="submit"
          className="rounded-[4px] text-2xl bg-red-600 hover:bg-red-500 mt-4 w-full py-4 text-white"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
}
function Footer() {
  const optionStyle =
    "border-0 py-1 px-4 text-sm text-gray-900 hover:text-gray-800";
  return (
    <footer className="px-20 pt-7 pb-5 bg-[#F3F3F3] ">
      <p className="text-[#737373] text-[1.05rem]">
        ¿Preguntas? Llama al{" "}
        <a className="hover:underline " href="#">
          01 800 917 1564
        </a>
      </p>
      <div className="grid grid-cols-4 gap-3 mt-6 mb-3 w-3/4">
        {data.map((f, i) => (
          <a
            className="text-[#737373] text-sm hover:underline"
            href="#"
            key={i}
          >
            {f}
          </a>
        ))}
      </div>
      <div className="text-[#737373] relative inline-flex items-center">
        <LanguageIcon
          className="absolute left-3 bottom-3 pointer-events-none "
          sx={{ fontSize: "20px" }}
        />
        <select className="bg-white border border-[#737373] rounded-sm ps-8 pe-4 py-3 text-[1.05rem]">
          <option className={optionStyle} value="español">
            Español
          </option>
          <option className={optionStyle} value="english">
            English
          </option>
        </select>
      </div>
    </footer>
  );
}
function Register() {
  return (
    <div className="bg-[#fefefe]">
      <div className="h-screen">
        <NavBar />
        <hr />
        <Form />
      </div>
      <hr />
      <Footer />
    </div>
  );
}

export default Register;
