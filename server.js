const { ExpressPeerServer } = require('peer');
const express = require('express');
const http    = require('http');

const app    = express();
const server = http.createServer(app);
const PORT   = process.env.PORT || 9000;

app.get('/', (req, res) => {
  res.json({
    service : 'Wallace Screen PeerJS Server',
    status  : 'online',
    uptime  : Math.floor(process.uptime()) + 's',
    time    : new Date().toISOString(),
  });
});

// Mount PeerJS at /peerjs with internal path also /peerjs
const peerServer = ExpressPeerServer(server, {
  proxied: true,
});

app.use('/peerjs', peerServer);

peerServer.on('connection', (client) => {
  console.log(`[Wallace] Peer conectado: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`[Wallace] Peer desconectado: ${client.getId()}`);
});

server.listen(PORT, () => {
  console.log(`[Wallace] Servidor rodando na porta ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
