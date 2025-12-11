# 🍽️ Sistema de Gerenciamento de Comandas - RestauranteX

Sistema completo de controle de comandas de restaurante desenvolvido em **HTML, CSS e JavaScript puro**.

## 📋 Características

- ✅ **100% Front-End** - Funciona offline, sem necessidade de servidor
- ✅ **Design Moderno** - Interface limpa e responsiva
- ✅ **Sistema de Cargos** - 5 tipos de funcionários com permissões específicas
- ✅ **Fluxo de Trabalho** - 5 status sequenciais para comandas
- ✅ **Imagens Reais** - Fotos dos pratos via Unsplash
- ✅ **Gráficos Interativos** - Estatísticas com Chart.js
- ✅ **Impressão** - Comandas otimizadas para impressão

## 🚀 Como Usar

### Instalação

1. **Baixe os 3 arquivos:**
   - `index.html`
   - `styles.css`
   - `app.js`

2. **Coloque todos na mesma pasta**

3. **Abra o arquivo `index.html` no navegador**

### Login

**Opção 1: Como Gerente**
- Aba: Gerente
- Email: qualquer@email.com
- Senha: qualquer senha
- Acesso completo a todas as funcionalidades

**Opção 2: Como Funcionário**
- Aba: Funcionário
- Nome: Seu nome
- Cargo: Selecione um dos cargos disponíveis

### Cargos e Permissões

| Cargo | Criar Comanda | Avançar Status | Finalizar |
|-------|--------------|----------------|-----------|
| **Garçom/Garçonete** | ✅ | Pendente → Atendimento | ✅ |
| **Atendente** | ❌ | Atendimento → Preparo | ❌ |
| **Auxiliar de Cozinha** | ❌ | Preparo → Pronto | ❌ |
| **Cozinheiro** | ❌ | Pronto → Finalizado | ❌ |
| **Gerente** | ✅ | Todos | ✅ |

### Fluxo de Status

```
1. PENDENTE (Amarelo) 
   ↓ [Atendente]
2. EM ATENDIMENTO (Azul)
   ↓ [Auxiliar de Cozinha]
3. EM PREPARO (Laranja)
   ↓ [Cozinheiro]
4. PRONTO (Verde)
   ↓ [Garçom]
5. FINALIZADO (Cinza)
```

## 📱 Páginas do Sistema

### 1. 📊 Dashboard
- Estatísticas em tempo real
- Gráfico de comandas por status
- Últimas comandas
- Visão geral das mesas

### 2. 📋 Comandas
- Lista completa de comandas
- Filtros por status
- Busca por número, mesa ou cliente
- Botão "Nova Comanda" (apenas Garçom/Gerente)

### 3. 📄 Detalhes da Comanda
- Informações completas da comanda
- Lista de itens com imagens
- Resumo financeiro (Subtotal + Taxa 10%)
- Botões:
  - **Imprimir**: Imprime a comanda
  - **Avançar Status**: Move para próximo status (se autorizado)
  - **Finalizar**: Abre modal de pagamento (apenas Garçom/Gerente)

### 4. 🪑 Mesas
- Layout visual do restaurante
- 12 mesas com status:
  - 🟢 Verde = Disponível
  - 🟡 Amarelo = Reservada
  - 🔴 Vermelho = Ocupada
- Clique para ver comanda associada

## 🎨 Recursos Visuais

- **Paleta de Cores Vibrante**
  - Roxo primário: #8b5cf6
  - Verde (sucesso): #4caf50
  - Amarelo (atenção): #ff9800
  - Vermelho (urgente): #f44336
  - Azul (info): #2196f3

- **Ícones**: Font Awesome 6.4.0
- **Gráficos**: Chart.js
- **Imagens**: Unsplash (carregamento automático)

## 📦 Dados Mockados

O sistema vem com dados de exemplo:
- **7 comandas** em diferentes status
- **12 mesas** (4 ocupadas, 2 reservadas, 6 disponíveis)
- **15 itens de cardápio** (pratos, bebidas, sobremesas)
- **Valores realistas** em R$

## 🖨️ Impressão

Para imprimir uma comanda:
1. Acesse os detalhes da comanda
2. Clique no botão "Imprimir"
3. O sistema ocultará automaticamente o header e botões
4. Use Ctrl+P ou o diálogo de impressão do navegador

## 💻 Requisitos Técnicos

- **Navegador moderno** (Chrome, Firefox, Edge, Safari)
- **Conexão com internet** (apenas para carregar imagens e bibliotecas externas)
- **JavaScript habilitado**

## 🔧 Personalização

### Alterar Nome do Restaurante
No arquivo `index.html`, procure por "RestauranteX" e substitua pelo nome desejado.

### Mudar Cores
No arquivo `styles.css`, edite as variáveis CSS no `:root`:
```css
:root {
    --primary: #8b5cf6;  /* Cor principal */
    --success: #4caf50;   /* Verde */
    --warning: #ff9800;   /* Amarelo */
    --danger: #f44336;    /* Vermelho */
}
```

### Adicionar Novos Itens
No arquivo `app.js`, na função `inicializarDados()`, adicione novos itens ao array `menuItems`.

## 🐛 Solução de Problemas

**As imagens não carregam?**
- Verifique sua conexão com internet
- URLs do Unsplash podem ter mudado
- As imagens têm fallback visual com gradiente roxo

**O gráfico não aparece?**
- Verifique se o Chart.js está carregando (conexão com internet)
- Abra o console do navegador (F12) para ver erros

**Botões não funcionam?**
- Verifique se o JavaScript está habilitado
- Certifique-se de que os 3 arquivos estão na mesma pasta

## 📄 Licença

Este é um projeto de exemplo/demonstração. Livre para uso educacional e comercial.

## 👨‍💻 Desenvolvedor

Sistema desenvolvido para fins de demonstração de interface de gerenciamento de restaurante.

---

**Versão:** 1.0.0  
**Última atualização:** Novembro 2024
