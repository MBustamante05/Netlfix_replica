import { TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Contact() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(email.trim() === ""){
      // Por el momento se mandejará la lógica así
      alert("El email es obligatorio");
      return;
    }
    navigate("/signup"); 
  };
  return (
    <div>
      <p className="text-[1.02rem] text-center">
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </p>

      <form className="flex gap-3 mt-5" onSubmit={handleStart}>
        <TextField
          className="bg-blur flex-auto"
          id="outlined-required"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white", // Color del texto
              "& fieldset": {
                borderColor: "#555",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Borde blanco en el estado de enfoque
              },
            },
            "& .MuiInputLabel-root": {
              color: "white", // Color del label
            },
          }}
        />
        <button type="submit" className="bg-red-700 rounded-[5px] items-center hover:bg-red-800 text-white font-medium col-span-2 text-2xl w-52">
          Comenzar
          <ArrowForwardIosIcon className="ml-2" />
        </button>
      </form>
    </div>
  );
}

export default Contact;
