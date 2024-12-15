import { TextField } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Contact() {
  return (
    <div>
      <p className="text-[1.02rem] text-center">
        ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresía de Netflix.
      </p>

      <div className="flex gap-3 mt-5">
        <TextField
          className="bg-blur flex-auto"
          id="outlined-required"
          type="email"
          label="Email"
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
        <button className="bg-red-700 rounded-[5px] items-center hover:bg-red-800 text-white font-medium col-span-2 text-2xl w-52">
          Comenzar
          <ArrowForwardIosIcon className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Contact;
