Aqui está apenas a seção do **Frontend**, formatada em Markdown para você copiar e colar direto no seu arquivo:

```markdown
## 📱 4. Passo a Passo: Configuração do Frontend (Mobile)

### Passo 4.1: Instalação

1. Abra um **novo terminal** no seu computador (não feche o terminal do backend).
2. Navegue até a pasta `frontend`:
```bash
cd frontend

```

3. Instale as dependências do aplicativo rodando:

```bash
npm install

```

### Passo 4.2: Configurar o IP da API ou URL de Produção

Como o celular físico ou emulador não reconhecem a palavra `localhost`, você precisa apontar para o IP local da sua máquina ou para a URL do seu backend na nuvem.

1. Abra o arquivo `frontend/App.js`.
2. Procure pela linha da constante `API_URL` (por volta da linha 6).
3. Altere o valor inserindo o IP do seu computador ou a URL de deploy do seu backend:

```javascript
const API_URL = 'http://SEU_IP_LOCAL:3000/api/tasks';

```

### Passo 4.3: Iniciar o Aplicativo com Expo

1. No terminal da pasta `frontend`, execute:

```bash
npx expo start

```

2. Um QR Code será gerado no terminal.
3. Abra o aplicativo **Expo Go** no seu celular físico (disponível na Google Play Store ou App Store).
4. Use a câmera do celular (iOS) ou a função de escanear do Expo Go (Android) para ler o QR Code do terminal.
5. O aplicativo carregará na tela do celular pronto para cadastrar, listar, editar e deletar as tarefas em tempo real integradas com o seu banco de dados!

```

```
