 Passo a Passo: Configuração do Frontend (Mobile)
Passo 4.1: Instalação
Abra um novo terminal no seu computador (não feche o terminal do backend).
Navegue até a pasta frontend:
cd frontend
Instale as dependências do aplicativo rodando:
npm install
Passo 4.2: Configurar o IP da API
Como o celular físico ou emulador não reconhecem a palavra localhost, você precisa descobrir o IP local da sua máquina (ex: 192.168.1.5).

Abra o arquivo frontend/App.js.
Procure pela linha da constante API_URL (por volta da linha 6).
Altere o valor inserindo o IP do seu computador mantendo a porta do backend:
const API_URL = 'http://SEU_IP_LOCAL:3000/api/tasks';
Passo 4.3: Iniciar o Aplicativo com Expo
No terminal da pasta frontend, execute:
npx expo start
Um QR Code será gerado no terminal.
Abra o aplicativo Expo Go no seu celular físico (disponível na Google Play Store ou App Store).
Use a câmera do celular (iOS) ou a função de escanear do Expo Go (Android) para ler o QR Code do terminal.
O aplicativo carregará na tela do celular pronto para cadastrar, listar, editar e deletar as tarefas em tempo real integradas com o seu MongoDB!
