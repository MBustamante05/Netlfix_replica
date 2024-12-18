process.loadEnvFile();

module.exports = {
  PORT,
  MONGO_URL,
  JWT_KEY,
} = process.env;
