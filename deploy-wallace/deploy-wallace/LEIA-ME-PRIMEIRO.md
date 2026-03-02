# Deploy Wallace Screen — Guia Completo

## Estrutura deste pacote

```
deploy-wallace/
├── LEIA-ME-PRIMEIRO.md        ← você está aqui
├── peerjs-server/             ← servidor privado (Railway)
│   ├── server.js
│   ├── package.json
│   ├── railway.toml
│   └── README.md              ← instruções detalhadas de deploy
└── sites/
    ├── wallace-screen.html        ← app Wallace Screen
    └── wallace-screen-master.html ← app Wallace Screen Master
```

---

## Passo a passo resumido

### ETAPA 1 — Deploy do servidor PeerJS (Railway)

1. Acesse https://railway.app → crie conta gratuita
2. "New Project" → "Deploy from GitHub"
   (ou arraste a pasta `peerjs-server/` direto na interface)
3. Aguarde o deploy (~2 min)
4. Vá em **Settings → Networking → Generate Domain**
5. Copie o domínio gerado. Exemplo:
   `wallace-peerjs-abc123.up.railway.app`

### ETAPA 2 — Atualizar os HTMLs com seu domínio

Abra os dois arquivos em `sites/` num editor de texto (VS Code, Notepad++).

Localize esta linha em ambos os arquivos:
```javascript
const PEER_HOST = 'SEU-SERVIDOR.up.railway.app';
```

Substitua pelo domínio do Railway:
```javascript
const PEER_HOST = 'wallace-peerjs-abc123.up.railway.app';
```

Salve os dois arquivos.

### ETAPA 3 — Deploy dos sites (Netlify)

1. Acesse https://app.netlify.com
2. Wallace Screen:
   - Arraste o arquivo `wallace-screen.html` → renomeie para `index.html`
   - Deploy no site existente ou crie novo
3. Wallace Screen Master:
   - Mesma coisa com `wallace-screen-master.html`

### ETAPA 4 — Teste final

1. Abra o site no Chrome
2. Verifique no console do navegador (F12) se aparece:
   `[Wallace] Peer conectado` (sem erros de conexão)
3. No Railway, acesse o domínio gerado — deve mostrar:
   `{ "status": "online" }`

---

## Verificação rápida de saúde

| Serviço | URL para verificar |
|---------|-------------------|
| PeerJS Server | https://SEU-DOMINIO.up.railway.app |
| Wallace Screen | wallacescreen.live |
| Wallace Screen Master | wallacescreenmaster.live |

---

## Contato
contato@fundacaowallace.org · WhatsApp: (41) 99880-6059
