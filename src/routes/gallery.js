const express = require('express');
const path = require('path');

const app = express();

app.get('/post/:id', (req, res) => {
  const { id } = req.params;

  const illustrations = [
    { 
      id: 1, 
      caminhoFoto: '/public/assets/img/girl.jpeg', 
      titulo: 'Ilustração 1', 
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.' 
    },
    { 
      id: 2, 
      caminhoFoto: '/public/assets/img/boy.jpeg', 
      titulo: 'Ilustração 2', 
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada metus non tempor rutrum.' 
    },
    { 
      id: 3, 
      caminhoFoto: '/public/assets/img/girl2.jpg', 
      titulo: 'Ilustração 3', 
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id urna quis sapien dapibus tincidunt.' 
    }
  ];

  const illustration = illustrations.find(item => item.id === parseInt(id));

  if (illustration) {
    res.render('native/post', { illustration });
  } else {
    res.status(404).send('Ilustração não encontrada');
  }
});

module.exports = app;
