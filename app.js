const sequelize = require('./database/models');
const express = require('express');
const app = express();
const student = require('./routes/routeStudent')
// Configuração
    // Middleware para analisar solicitações JSON
    app.use(express.json());

// Rotas
    app.use('/v1/estudante', student);

// Depuração
// console.log('o que tem dentro do sequelize? ->', sequelize);
// console.log('o que tem dentro do app = express()? ->', app);

// Criando tabelas

sequelize.sequelizeStudent.sync().then(() => {
    console.log('Tabela ESTUDANTE sincronizada');
  });
  
sequelize.sequelizeTeacher.sync().then(() => {
    console.log('Tabela PROFESSOR sincronizada');
  });
  
sequelize.sequelizeClass.sync().then(() => {
    console.log('Tabela DISCIPLINA sincronizada');
  });
  
sequelize.sequelizeGrade.sync().then(() => {
    console.log('Tabela NOTA sincronizada');
  });
  
  app.listen(3000, () => {
    console.log('Servidor Express está rodando na porta 3000');
});