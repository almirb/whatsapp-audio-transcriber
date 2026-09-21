# Changelog

As mudanças relevantes deste projeto serão documentadas neste arquivo. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/) e o versionamento segue o [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## 0.2.5 - 2026-09-21

### Adicionado

- rótulo no gatilho da transcrição, "Transcrever" antes e "Transcrição" depois, ampliando a área clicável para além do ícone;
- opção de exibição que abre as transcrições já salvas assim que a mensagem de voz aparece, desligada por padrão;
- interruptor ao lado do título "Formatação", no popup, que liga e desliga a etapa do modelo de formatação.

### Alterado

- a formatação passa a vir desligada: por padrão a transcrição sai como o Whisper a devolve, sem requisição ao GPT-OSS. Ligue o interruptor em "Formatação" para retomar o comportamento anterior;
- o gatilho deixou de ter tamanho fixo: a posição acompanha a largura medida do botão e fica centrada na linha de duração do áudio;
- a chave do cache de transcrições subiu para v4. As transcrições guardadas pela versão anterior deixam de ser reaproveitadas e o áudio é transcrito novamente no primeiro acesso.

## 0.2.4 - 2026-09-21

### Alterado

- tipografia do painel de transcrição: corpo menor, entrelinha ajustada e parágrafos com espaçamento próprio;
- largura do painel limitada à metade da faixa de mensagens, com a bolha do áudio como piso;
- transcrição exibida por inteiro, sem altura fixa nem barra de rolagem.

### Adicionado

- ESLint com regras tipadas para TypeScript e validação oficial dos Hooks do React;
- verificação de lint na integração contínua;
- links para a Chrome Web Store e o repositório no popup;
- metadados localizados em português e inglês para a Chrome Web Store;
- onboarding no WhatsApp para criar e configurar a API key da Groq antes da captura do áudio.

### Corrigido

- resposta do service worker às mensagens do popup, que impedia a verificação da conexão com a Groq e o salvamento da API key;
- cancelamento imediato durante a captura e a montagem do áudio;
- validação do arquivo capturado e isolamento do canal acionado pela página;
- timeout, ownership e limpeza dos trabalhos ainda incompletos;
- exibição do resultado mesmo quando a persistência no cache falha;
- tratamento de falhas assíncronas no popup e pré-liberação do cache.

## 0.2.0 - 2026-08-04

### Adicionado

- extensão Manifest V3 para transcrição de mensagens de voz do WhatsApp Web;
- captura silenciosa de áudio OGG/Opus no contexto da página;
- transcrição com Whisper Large v3 Turbo pela Groq;
- formatação conservadora com GPT-OSS 20B e saída estruturada;
- fila serial, cancelamento, progresso e tratamento de erros;
- cache local de transcrições e gerenciamento da API key;
- popup de configuração e widgets isolados com Shadow DOM;
- testes do protocolo, provider e identificação de mensagens de voz;
- pacote de distribuição manual para Chrome no macOS e Windows.
