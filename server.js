/**
 * Wallace Screen — Servidor PeerJS Privado
 * Deploy: Railway (railway.app)
 */

const { ExpressPeerServer } = require('peer');
const express = require('express');
const http    = require('http');

const app    = express();
const server = http.createServer(app);
const PORT   = process.env.PORT || 9000;

// ── Health check ──
app.get('/', (req, res) => {
  res.json({
    service : 'Wallace Screen PeerJS Server',
    status  : 'online',
    uptime  : Math.floor(process.uptime()) + 's',
    time    : new Date().toISOString(),
  });
});

// ── PeerJS montado em /peerjs ──
const peerServer = ExpressPeerServer(server, {
  path   : '/peerjs',
  proxied: true,
});

app.use('/peerjs', peerServer);

peerServer.on('connection', (client) => {
  console.log(`[Wallace] Peer conectado: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`[Wallace] Peer desconectado: ${client.getId()}`);
});

// ── Start ──
server.listen(PORT, () => {
  console.log(`[Wallace] Servidor rodando na porta ${PORT}`);
});

// ── Graceful shutdown ──
process.on('SIGTERM', () => {
  console.log('[Wallace] Encerrando...');
  server.close(() => process.exit(0));
});
