/**
 * Wallace Screen — Servidor PeerJS Privado
 * Deploy: Railway (railway.app)
 *
 * Este servidor substitui o peerjs.com público, eliminando
 * o único ponto de falha externo da plataforma.
 */

const { PeerServer } = require('peer');
const express        = require('express');

const app  = express();
const PORT = process.env.PORT || 9000;

// ── Health check (Railway usa isso para saber se o serviço está vivo) ──
app.get('/', (req, res) => {
  res.json({
    service : 'Wallace Screen PeerJS Server',
    status  : 'online',
    uptime  : Math.floor(process.uptime()) + 's',
    time    : new Date().toISOString(),
  });
});

// ── Servidor HTTP base ──
const httpServer = app.listen(PORT, () => {
  console.log(`[Wallace] Servidor HTTP rodando na porta ${PORT}`);
});

// ── Servidor PeerJS montado no caminho /peerjs ──
const peerServer = PeerServer({
  server : httpServer,
  path   : '/peerjs',
  proxied: true,    // necessário atrás do proxy do Railway
});

peerServer.on('connection', (client) => {
  console.log(`[Wallace] Peer conectado: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`[Wallace] Peer desconectado: ${client.getId()}`);
});

// ── Graceful shutdown ──
process.on('SIGTERM', () => {
  console.log('[Wallace] Encerrando servidor...');
  httpServer.close(() => process.exit(0));
});
