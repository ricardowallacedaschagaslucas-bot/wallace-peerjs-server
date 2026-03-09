const express    = require('express');
const { ExpressPeerServer } = require('peer');
const cors       = require('cors');

const app  = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.json({
    service: 'Servidor Wallace Screen PeerJS',
    status : 'online',
    uptime : process.uptime().toFixed(0) + 's',
    time   : new Date().toISOString(),
  });
});

const server = app.listen(PORT, () => {
  console.log(`[Wallace PeerJS] Rodando na porta ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true,
});

app.use('/peerjs', peerServer);

peerServer.on('connection',  client => console.log('[PeerJS] Conectado:', client.getId()));
peerServer.on('disconnect',  client => console.log('[PeerJS] Desconectado:', client.getId()));

process.on('SIGTERM', () => process.exit(0));
