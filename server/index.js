const { MONGO_URL, PORT } = require('./config');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/user.route');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log("Servidor en ejecución..."));
    console.log("Conectado a MongoDB");
  })
  .catch((err) => console.log(`Error al conectarse a MongoDB: ${err.message}`));
