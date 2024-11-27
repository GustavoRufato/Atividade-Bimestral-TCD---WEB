const express = require('express');
const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const port = 8000;

if (!process.env.PUBLIC_PATH) {
  console.error('A variável de ambiente PUBLIC_PATH não está definida.');
  process.exit(1); 
}

app.set('view engine', 'ejs');

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use('/views', express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.render('native/home');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
