const routeGallery = require('./routes/gallery.js') 

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

app.get('/home', (req, res) => {
  const illustrations = [
    {
      id: 1,
      caminhoFoto: '/public/assets/img/girl.jpeg',
      titulo: 'Ilustração 1',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.'
    },
    {
      id: 2,
      caminhoFoto: '/public/assets/img/boy.jpeg',
      titulo: 'Ilustração 2',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    },
    {
      id: 3,
      caminhoFoto: '/public/assets/img/girl2.jpg',
      titulo: 'Ilustração 3',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.'
    }
  ];

  res.render('native/home', { illustrations });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

app.use('/gallery', routeGallery)