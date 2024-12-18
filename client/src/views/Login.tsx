import { Link, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FooterInfo from "../components/User/FooterInfo";
import { frecuentesResume } from "../data/infoLanding";
import Languages from "../components/Landing/Languages";
import axios from "axios";
import { useState } from "react";

function Main() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    axios
      .post("/api/users/login", { email, password })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Success!") {
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const inputStyle =
    `p-4  block w-full bg-blur border ${error ? 'border-red-500 ' : 'border-[#555] mb-4'}  rounded`;
  const buttonStyle = `rounded text-white font-medium w-full py-2 `;
  const smallStyle = "text-red-600 text-start";
  return (
    <section className="login bg h-screen relative text-white ">
      <nav className="content flex items-center justify-between  px-[165px]">
        <img
          className="w-48 cursor-pointer"
          src="/Netflix_Logo_RGB.png"
          alt="Logo de Netflix"
          onClick={() => navigate("/")}
        />
      </nav>
      <div className="content mx-auto w-[450px] h-[758px] login-form p-16 rounded-t">
        <h1 className="font-bold text-3xl mb-8 text-left">Inicia sesión</h1>
        <form action="post" onSubmit={handleSubmit}>
          <input
            type="email"
            className={inputStyle}
            placeholder="Email o número de celular"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error ? (
          <small className={smallStyle}>El email es requerido</small>
        ) : (
          ""
        )}
          <input
            type="password"
            className={inputStyle}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? (
          <small className={smallStyle}>La contraseña es requerida</small>
        ) : (
          ""
        )}
          <button
            className={[buttonStyle, "bg-[#E50914] :bg-red-800"].join(" ")}
          >
            Iniciar sesión
          </button>
          <p className="my-4 text-[#ccc]">O</p>
          <button className={[buttonStyle, "btn-code mb-4"].join(" ")}>
            Usar un código de inicio de sesión
          </button>
          <Link to="/login" className="hover:underline hover:text-[#B7B6B4]">
            ¿Olvidaste la contraseña?
          </Link>
          <div className="flex items-center mt-3">
            {/* Cambiar checkbox */}
            <Checkbox
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
            <p>Recuérdame</p>
          </div>
          <p className="text-[#B7B6B4] mt-2 mb-5 text-left">
            ¿Primera vez en Netflix?{" "}
            <Link
              to="/signup"
              className="font-medium text-white hover:underline"
            >
              Suscríbete ahora
            </Link>
          </p>
          <p className="text-[0.8rem] text-[#8C8C8C] text-left">
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot.{" "}
            <Link to="/login" className="text-blue-700 hover:underline">
              Más info.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="bg-black pt-[266px] pb-[80px] px-[165px]">
      <FooterInfo
        data={frecuentesResume}
        underline={false}
        marginY="mt-5 mb-7"
      />
      <Languages />
    </footer>
  );
}
function Login() {
  return (
    <div>
      <Main />
      <Footer />
    </div>
  );
}

export default Login;
