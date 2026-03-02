# Wallace Screen — Servidor PeerJS Privado

Servidor PeerJS próprio para Wallace Screen e Wallace Screen Master.
Substitui o `peerjs.com` público, eliminando dependência de terceiros.

---

## Deploy no Railway (5 minutos)

### 1. Criar conta
Acesse https://railway.app e crie uma conta gratuita (pode usar o Google).

### 2. Criar novo projeto
- Clique em **"New Project"**
- Escolha **"Deploy from GitHub repo"** OU **"Empty project → Add service → GitHub"**
- Se preferir sem GitHub: escolha **"Deploy from local directory"** e arraste esta pasta

### 3. Deploy via GitHub (recomendado)
- Crie um repositório no GitHub e suba esta pasta
- No Railway, conecte o repositório
- O Railway detecta automaticamente o `package.json` e faz o deploy

### 4. Obter a URL do servidor
Após o deploy, vá em **Settings → Networking → Generate Domain**.
Você receberá uma URL no formato:
```
https://wallace-peerjs-xxxx.up.railway.app
```
Guarde essa URL — ela vai nos arquivos HTML.

### 5. Atualizar os HTMLs
Nos arquivos `wallace-screen.html` e `wallace-screen-master.html`,
localize a linha:
```javascript
const PEER_HOST = 'SEU-SERVIDOR.up.railway.app';
```
E substitua pelo domínio gerado pelo Railway.

---

## Verificar se está funcionando

Acesse a URL do servidor no navegador. Você deve ver:
```json
{
  "service": "Wallace Screen PeerJS Server",
  "status": "online",
  "uptime": "42s"
}
```

---

## Custos

| Uso | Custo |
|-----|-------|
| Até ~500h de compute/mês | **Gratuito** (plano Hobby) |
| Uso intenso / produção | ~$5 USD/mês (~R$ 25) |

Para a maioria dos concursos e aulas, o plano gratuito é suficiente.

---

## Suporte
contato@fundacaowallace.org
