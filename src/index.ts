import * as express from 'express';

import router from './routes/Routes';

import sequelize  from './database/conect';
const app = express();

//use router middleware
app.use('/', router);

const server = async() => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
}

server();