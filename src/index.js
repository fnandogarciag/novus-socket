import config from './config/index.js';
import express from 'express';
import http from 'http';
import cors from 'cors';
import routerApi from './routes/_index.js';
import initSocket from './socket/_index.js';

const app = express();
const server = http.createServer(app);
// import initApp_Db from './initialSetUp.js';
// initApp_Db();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ msg: 'Hello World!' });
});

routerApi(app);
initSocket(server);

const PORT = config.port || 4500;
server.listen(PORT, () => {
  console.log('listening on *:' + PORT);
});
