// Estado Global
let currentUser = null;
let currentPage = 'dashboard';
let comandas = [];
let mesas = [];
let menuItems = [];
let currentComandaId = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    inicializarDados();
    inicializarEventos();
});

// Inicializar Dados Mockados
function inicializarDados() {
    // Menu Items com imagens confiáveis
    menuItems = [
        { id: 1, nome: 'Filé Mignon ao Molho Madeira', categoria: 'Pratos Principais', preco: 65.00, imagem: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=400&fit=crop' },
        { id: 2, nome: 'Salmão Grelhado com Legumes', categoria: 'Pratos Principais', preco: 58.00, imagem: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=400&h=400&fit=crop' },
        { id: 3, nome: 'Risoto de Cogumelos', categoria: 'Pratos Principais', preco: 45.00, imagem: 'https://images.unsplash.com/photo-1476124369491-f1e2dae46f2e?w=400&h=400&fit=crop' },
        { id: 4, nome: 'Picanha na Brasa', categoria: 'Pratos Principais', preco: 72.00, imagem: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop' },
        { id: 5, nome: 'Frango à Parmegiana', categoria: 'Pratos Principais', preco: 42.00, imagem: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=400&fit=crop' },
        { id: 6, nome: 'Caesar Salad', categoria: 'Entradas', preco: 28.00, imagem: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=400&fit=crop' },
        { id: 7, nome: 'Bruschetta Italiana', categoria: 'Entradas', preco: 24.00, imagem: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=400&fit=crop' },
        { id: 8, nome: 'Carpaccio de Carne', categoria: 'Entradas', preco: 35.00, imagem: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop' },
        { id: 9, nome: 'Refrigerante', categoria: 'Bebidas', preco: 8.00, imagem: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=400&fit=crop' },
        { id: 10, nome: 'Suco Natural', categoria: 'Bebidas', preco: 12.00, imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop' },
        { id: 11, nome: 'Vinho Tinto Taça', categoria: 'Bebidas', preco: 22.00, imagem: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=400&fit=crop' },
        { id: 12, nome: 'Água Mineral', categoria: 'Bebidas', preco: 6.00, imagem: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=400&fit=crop' },
        { id: 13, nome: 'Petit Gateau', categoria: 'Sobremesas', preco: 25.00, imagem: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=400&fit=crop' },
        { id: 14, nome: 'Tiramisù', categoria: 'Sobremesas', preco: 22.00, imagem: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop' },
        { id: 15, nome: 'Cheesecake', categoria: 'Sobremesas', preco: 20.00, imagem: 'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=400&h=400&fit=crop' }
    ];

    // Mesas
    mesas = [
        { id: 1, numero: 1, capacidade: 4, status: 'ocupada', comanda: 1 },
        { id: 2, numero: 2, capacidade: 2, status: 'disponivel', comanda: null },
        { id: 3, numero: 3, capacidade: 6, status: 'ocupada', comanda: 2 },
        { id: 4, numero: 4, capacidade: 4, status: 'disponivel', comanda: null },
        { id: 5, numero: 5, capacidade: 4, status: 'ocupada', comanda: 3 },
        { id: 6, numero: 6, capacidade: 2, status: 'reservada', comanda: null },
        { id: 7, numero: 7, capacidade: 8, status: 'disponivel', comanda: null },
        { id: 8, numero: 8, capacidade: 4, status: 'ocupada', comanda: 4 },
        { id: 9, numero: 9, capacidade: 2, status: 'disponivel', comanda: null },
        { id: 10, numero: 10, capacidade: 4, status: 'ocupada', comanda: 5 },
        { id: 11, numero: 11, capacidade: 6, status: 'disponivel', comanda: null },
        { id: 12, numero: 12, capacidade: 4, status: 'reservada', comanda: null }
    ];

    // Comandas
    comandas = [
        {
            id: 1,
            numero: 'CMD-001',
            mesa: 1,
            cliente: 'João Silva',
            status: 'pendente',
            horario: '18:30',
            itens: [
                { ...menuItems[0], quantidade: 2 },
                { ...menuItems[9], quantidade: 2 },
                { ...menuItems[12], quantidade: 1 }
            ]
        },
        {
            id: 2,
            numero: 'CMD-002',
            mesa: 3,
            cliente: 'Maria Santos',
            status: 'atendimento',
            horario: '18:45',
            itens: [
                { ...menuItems[1], quantidade: 1 },
                { ...menuItems[6], quantidade: 1 },
                { ...menuItems[10], quantidade: 2 }
            ]
        },
        {
            id: 3,
            numero: 'CMD-003',
            mesa: 5,
            cliente: 'Pedro Oliveira',
            status: 'preparo',
            horario: '19:00',
            itens: [
                { ...menuItems[3], quantidade: 3 },
                { ...menuItems[5], quantidade: 2 },
                { ...menuItems[8], quantidade: 3 }
            ]
        },
        {
            id: 4,
            numero: 'CMD-004',
            mesa: 8,
            cliente: 'Ana Costa',
            status: 'pronto',
            horario: '19:15',
            itens: [
                { ...menuItems[2], quantidade: 2 },
                { ...menuItems[11], quantidade: 2 }
            ]
        },
        {
            id: 5,
            numero: 'CMD-005',
            mesa: 10,
            cliente: 'Carlos Mendes',
            status: 'preparo',
            horario: '19:30',
            itens: [
                { ...menuItems[4], quantidade: 2 },
                { ...menuItems[7], quantidade: 1 },
                { ...menuItems[9], quantidade: 2 },
                { ...menuItems[13], quantidade: 2 }
            ]
        },
        {
            id: 6,
            numero: 'CMD-006',
            mesa: 1,
            cliente: 'Roberto Lima',
            status: 'finalizado',
            horario: '17:00',
            itens: [
                { ...menuItems[0], quantidade: 1 },
                { ...menuItems[8], quantidade: 1 }
            ]
        },
        {
            id: 7,
            numero: 'CMD-007',
            mesa: 3,
            cliente: 'Fernanda Alves',
            status: 'finalizado',
            horario: '17:30',
            itens: [
                { ...menuItems[1], quantidade: 2 },
                { ...menuItems[10], quantidade: 2 }
            ]
        }
    ];
}

// Inicializar Eventos
function inicializarEventos() {
    // Login Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(tab + 'Tab').classList.add('active');
        });
    });

    // Login Forms
    document.getElementById('gerenteForm').addEventListener('submit', function(e) {
        e.preventDefault();
        currentUser = {
            nome: 'Gerente',
            cargo: 'gerente',
            tipo: 'gerente'
        };
        fazerLogin();
    });

    document.getElementById('funcionarioForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const nome = document.getElementById('funcionarioNome').value;
        const cargo = document.getElementById('funcionarioCargo').value;
        currentUser = {
            nome: nome,
            cargo: cargo,
            tipo: 'funcionario'
        };
        fazerLogin();
    });

    // Navegação
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            navegarPara(page);
        });
    });

    // Logout
    document.getElementById('btnLogout').addEventListener('click', fazerLogout);

    // Filtros de Comandas
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            filtrarComandas(filter);
        });
    });

    // Busca de Comandas
    document.getElementById('searchComandas').addEventListener('input', function(e) {
        buscarComandas(e.target.value);
    });

    // Nova Comanda
    document.getElementById('btnNovaComanda').addEventListener('click', abrirModalNovaComanda);

    // Modal Close
    document.querySelectorAll('.btn-close, .btn-cancel').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('active');
        });
    });

    // Form Nova Comanda
    document.getElementById('formNovaComanda').addEventListener('submit', function(e) {
        e.preventDefault();
        criarNovaComanda();
    });

    // Finalizar Comanda
    document.getElementById('btnConfirmarFinalizar').addEventListener('click', confirmarFinalizacao);
}

// Login
function fazerLogin() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('mainApp').classList.add('active');
    
    document.getElementById('userName').textContent = currentUser.nome;
    document.getElementById('userRole').textContent = formatarCargo(currentUser.cargo);
    
    // Mostrar botão nova comanda apenas para garçom
    if (currentUser.cargo === 'garcom' || currentUser.cargo === 'gerente') {
        document.getElementById('btnNovaComanda').style.display = 'flex';
    }
    
    navegarPara('dashboard');
    showToast('Login realizado com sucesso!', 'success');
}

function fazerLogout() {
    currentUser = null;
    document.getElementById('mainApp').classList.remove('active');
    document.getElementById('loginPage').classList.add('active');
    
    // Reset forms
    document.getElementById('gerenteForm').reset();
    document.getElementById('funcionarioForm').reset();
    
    showToast('Logout realizado com sucesso!', 'info');
}

// Navegação
function navegarPara(page) {
    currentPage = page;
    
    // Atualizar nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    // Atualizar páginas
    document.querySelectorAll('.content-page').forEach(p => p.classList.remove('active'));
    
    switch(page) {
        case 'dashboard':
            document.getElementById('dashboardPage').classList.add('active');
            renderizarDashboard();
            break;
        case 'comandas':
            document.getElementById('comandasPage').classList.add('active');
            renderizarComandas();
            break;
        case 'mesas':
            document.getElementById('mesasPage').classList.add('active');
            renderizarMesas();
            break;
        case 'detalhes':
            document.getElementById('detalhesPage').classList.add('active');
            renderizarDetalhes();
            break;
    }
}

// Dashboard
function renderizarDashboard() {
    // Estatísticas
    const ativas = comandas.filter(c => c.status !== 'finalizado').length;
    const pendentes = comandas.filter(c => c.status === 'pendente').length;
    const preparo = comandas.filter(c => c.status === 'preparo').length;
    const faturamento = calcularFaturamentoDia();
    
    document.getElementById('statAtivas').textContent = ativas;
    document.getElementById('statPendentes').textContent = pendentes;
    document.getElementById('statPreparo').textContent = preparo;
    document.getElementById('statFaturamento').textContent = formatarMoeda(faturamento);
    
    // Últimas Comandas
    const ultimasComandasHTML = comandas.slice(0, 5).map(comanda => `
        <div class="comanda-item" onclick="verDetalhes(${comanda.id})">
            <div class="comanda-info">
                <div class="comanda-numero">${comanda.numero}</div>
                <div class="comanda-detalhes">
                    Mesa ${comanda.mesa} • ${comanda.cliente} • ${comanda.horario}
                </div>
            </div>
            <span class="badge badge-${comanda.status}">${formatarStatus(comanda.status)}</span>
        </div>
    `).join('');
    document.getElementById('ultimasComandasList').innerHTML = ultimasComandasHTML;
    
    // Mesas Overview
    const mesasOverviewHTML = mesas.map(mesa => `
        <div class="mesa-card ${mesa.status}" onclick="verMesa(${mesa.id})">
            <div class="mesa-icon">
                <i class="fas fa-chair"></i>
            </div>
            <div class="mesa-numero">Mesa ${mesa.numero}</div>
            <div class="mesa-status">${formatarStatusMesa(mesa.status)}</div>
        </div>
    `).join('');
    document.getElementById('mesasOverview').innerHTML = mesasOverviewHTML;
    
    // Gráfico
    renderizarGrafico();
}

function renderizarGrafico() {
    const ctx = document.getElementById('statusChart');
    if (!ctx) return;
    
    const statusCount = {
        pendente: comandas.filter(c => c.status === 'pendente').length,
        atendimento: comandas.filter(c => c.status === 'atendimento').length,
        preparo: comandas.filter(c => c.status === 'preparo').length,
        pronto: comandas.filter(c => c.status === 'pronto').length,
        finalizado: comandas.filter(c => c.status === 'finalizado').length
    };
    
    if (window.statusChartInstance) {
        window.statusChartInstance.destroy();
    }
    
    window.statusChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Pendente', 'Em Atendimento', 'Em Preparo', 'Pronto', 'Finalizado'],
            datasets: [{
                label: 'Comandas',
                data: [statusCount.pendente, statusCount.atendimento, statusCount.preparo, statusCount.pronto, statusCount.finalizado],
                backgroundColor: [
                    '#f57c00',
                    '#1976d2',
                    '#ef6c00',
                    '#388e3c',
                    '#757575'
                ]
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Comandas
function renderizarComandas(filteredComandas = null) {
    const comandasParaRenderizar = filteredComandas || comandas;
    
    const comandasHTML = comandasParaRenderizar.map(comanda => {
        const total = calcularTotal(comanda);
        return `
            <div class="comanda-card" onclick="verDetalhes(${comanda.id})" style="border-left-color: ${getStatusColor(comanda.status)};">
                <div class="comanda-card-header">
                    <div>
                        <div class="comanda-card-numero">${comanda.numero}</div>
                        <div class="comanda-card-mesa">Mesa ${comanda.mesa}</div>
                    </div>
                    <span class="badge badge-${comanda.status}">${formatarStatus(comanda.status)}</span>
                </div>
                <div class="comanda-card-info">
                    <div><i class="fas fa-user"></i> ${comanda.cliente}</div>
                    <div><i class="fas fa-clock"></i> ${comanda.horario}</div>
                    <div><i class="fas fa-utensils"></i> ${comanda.itens.length} itens</div>
                </div>
                <div class="comanda-card-total">${formatarMoeda(total)}</div>
            </div>
        `;
    }).join('');
    
    document.getElementById('comandasList').innerHTML = comandasHTML || '<p style="text-align: center; padding: 40px; color: var(--text-secondary);">Nenhuma comanda encontrada</p>';
}

function filtrarComandas(status) {
    if (status === 'all') {
        renderizarComandas();
    } else {
        const filtered = comandas.filter(c => c.status === status);
        renderizarComandas(filtered);
    }
}

function buscarComandas(termo) {
    if (!termo) {
        renderizarComandas();
        return;
    }
    
    termo = termo.toLowerCase();
    const filtered = comandas.filter(c => 
        c.numero.toLowerCase().includes(termo) ||
        c.mesa.toString().includes(termo) ||
        c.cliente.toLowerCase().includes(termo)
    );
    renderizarComandas(filtered);
}

// Detalhes da Comanda
function verDetalhes(comandaId) {
    currentComandaId = comandaId;
    navegarPara('detalhes');
}

function renderizarDetalhes() {
    const comanda = comandas.find(c => c.id === currentComandaId);
    if (!comanda) return;
    
    const subtotal = calcularSubtotal(comanda);
    const taxa = subtotal * 0.1;
    const total = subtotal + taxa;
    
    const itensHTML = comanda.itens.map(item => `
        <div class="item-row">
            <img src="${item.imagem}" alt="${item.nome}" class="item-image">
            <div>
                <div class="item-nome">${item.nome}</div>
                <div class="item-categoria">${item.categoria}</div>
            </div>
            <div class="item-quantidade">${item.quantidade}x</div>
            <div class="item-preco">${formatarMoeda(item.preco)}</div>
            <div class="item-subtotal">${formatarMoeda(item.preco * item.quantidade)}</div>
        </div>
    `).join('');
    
    // Botão de ação baseado no cargo
    let botaoAcao = '';
    if (podeAvancarStatus(comanda.status)) {
        const proximoStatus = getProximoStatus(comanda.status);
        botaoAcao = `
            <button class="btn-acao btn-avancar" onclick="avancarStatus(${comanda.id})">
                <i class="fas fa-arrow-right"></i>
                ${getTextoAcao(proximoStatus)}
            </button>
        `;
    }
    
    let botaoFinalizar = '';
    if ((currentUser.cargo === 'garcom' || currentUser.cargo === 'gerente') && comanda.status === 'pronto') {
        botaoFinalizar = `
            <button class="btn-acao btn-finalizar" onclick="abrirModalFinalizar(${comanda.id})">
                <i class="fas fa-check-circle"></i>
                Finalizar Comanda
            </button>
        `;
    }
    
    const html = `
        <button class="btn btn-secondary" onclick="navegarPara('comandas')" style="margin-bottom: 20px;">
            <i class="fas fa-arrow-left"></i> Voltar
        </button>
        
        <div class="detalhes-header">
            <div class="detalhes-top">
                <div class="detalhes-title">
                    <div class="detalhes-numero">${comanda.numero}</div>
                    <span class="badge badge-${comanda.status}" style="width: fit-content;">${formatarStatus(comanda.status)}</span>
                </div>
            </div>
            <div class="detalhes-info-grid">
                <div class="info-item">
                    <span class="info-label">Mesa</span>
                    <span class="info-value">Mesa ${comanda.mesa}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Cliente</span>
                    <span class="info-value">${comanda.cliente}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Horário</span>
                    <span class="info-value">${comanda.horario}</span>
                </div>
            </div>
        </div>
        
        <div class="itens-section">
            <h2><i class="fas fa-list"></i> Itens do Pedido</h2>
            <div class="itens-list">
                ${itensHTML}
            </div>
        </div>
        
        <div class="resumo-section">
            <h2><i class="fas fa-calculator"></i> Resumo Financeiro</h2>
            <div class="resumo-item">
                <span>Subtotal</span>
                <span>${formatarMoeda(subtotal)}</span>
            </div>
            <div class="resumo-item">
                <span>Taxa de Serviço (10%)</span>
                <span>${formatarMoeda(taxa)}</span>
            </div>
            <div class="resumo-item total">
                <span>Total</span>
                <span>${formatarMoeda(total)}</span>
            </div>
        </div>
        
        <div class="acoes-section">
            <button class="btn-acao btn-imprimir" onclick="imprimirComanda()">
                <i class="fas fa-print"></i>
                Imprimir
            </button>
            ${botaoAcao}
            ${botaoFinalizar}
        </div>
    `;
    
    document.getElementById('detalhesContent').innerHTML = html;
}

function imprimirComanda() {
    window.print();
    showToast('Comanda enviada para impressão', 'info');
}

function podeAvancarStatus(status) {
    const permissoes = {
        'pendente': ['atendente', 'gerente'],
        'atendimento': ['auxiliar', 'gerente'],
        'preparo': ['cozinheiro', 'gerente'],
        'pronto': ['garcom', 'gerente']
    };
    
    return permissoes[status]?.includes(currentUser.cargo) || false;
}

function getProximoStatus(statusAtual) {
    const fluxo = {
        'pendente': 'atendimento',
        'atendimento': 'preparo',
        'preparo': 'pronto',
        'pronto': 'finalizado'
    };
    return fluxo[statusAtual];
}

function getTextoAcao(proximoStatus) {
    const textos = {
        'atendimento': 'Enviar para Atendimento',
        'preparo': 'Iniciar Preparo',
        'pronto': 'Marcar como Pronto',
        'finalizado': 'Finalizar Comanda'
    };
    return textos[proximoStatus];
}

function avancarStatus(comandaId) {
    const comanda = comandas.find(c => c.id === comandaId);
    if (!comanda) return;
    
    if (!podeAvancarStatus(comanda.status)) {
        showToast('Você não tem permissão para avançar esta comanda', 'error');
        return;
    }
    
    const proximoStatus = getProximoStatus(comanda.status);
    comanda.status = proximoStatus;
    
    showToast(`Comanda avançada para: ${formatarStatus(proximoStatus)}`, 'success');
    renderizarDetalhes();
    
    // Se voltou para dashboard, atualizar
    if (currentPage === 'dashboard') {
        renderizarDashboard();
    }
}

// Mesas
function renderizarMesas() {
    const mesasHTML = mesas.map(mesa => {
        let comandaInfo = '';
        if (mesa.comanda) {
            const comanda = comandas.find(c => c.id === mesa.comanda);
            if (comanda) {
                comandaInfo = `<div class="mesa-comanda">Comanda: ${comanda.numero}</div>`;
            }
        }
        
        return `
            <div class="mesa-card ${mesa.status}" onclick="verMesa(${mesa.id})">
                <div class="mesa-icon">
                    <i class="fas fa-chair"></i>
                </div>
                <div class="mesa-numero">Mesa ${mesa.numero}</div>
                <div class="mesa-status">${formatarStatusMesa(mesa.status)}</div>
                <div class="mesa-capacidade">${mesa.capacidade} lugares</div>
                ${comandaInfo}
            </div>
        `;
    }).join('');
    
    document.getElementById('mesasGrid').innerHTML = mesasHTML;
}

function verMesa(mesaId) {
    const mesa = mesas.find(m => m.id === mesaId);
    if (!mesa) return;
    
    if (mesa.comanda) {
        verDetalhes(mesa.comanda);
    } else {
        showToast(`Mesa ${mesa.numero} está ${formatarStatusMesa(mesa.status)}`, 'info');
    }
}

// Nova Comanda
function abrirModalNovaComanda() {
    const mesasDisponiveis = mesas.filter(m => m.status === 'disponivel');
    
    if (mesasDisponiveis.length === 0) {
        showToast('Não há mesas disponíveis no momento', 'error');
        return;
    }
    
    const mesasOptions = mesasDisponiveis.map(m => 
        `<option value="${m.id}">Mesa ${m.numero} (${m.capacidade} lugares)</option>`
    ).join('');
    
    document.getElementById('novaMesa').innerHTML = '<option value="">Selecione uma mesa...</option>' + mesasOptions;
    document.getElementById('modalNovaComanda').classList.add('active');
}

function criarNovaComanda() {
    const mesaId = parseInt(document.getElementById('novaMesa').value);
    const cliente = document.getElementById('novoCliente').value;
    
    if (!mesaId || !cliente) {
        showToast('Preencha todos os campos', 'error');
        return;
    }
    
    const mesa = mesas.find(m => m.id === mesaId);
    const novoId = Math.max(...comandas.map(c => c.id)) + 1;
    const novoNumero = `CMD-${String(novoId).padStart(3, '0')}`;
    const horario = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    // Itens aleatórios para demonstração
    const itensAleatorios = [
        { ...menuItems[0], quantidade: 1 },
        { ...menuItems[9], quantidade: 1 }
    ];
    
    const novaComanda = {
        id: novoId,
        numero: novoNumero,
        mesa: mesa.numero,
        cliente: cliente,
        status: 'pendente',
        horario: horario,
        itens: itensAleatorios
    };
    
    comandas.unshift(novaComanda);
    mesa.status = 'ocupada';
    mesa.comanda = novoId;
    
    document.getElementById('modalNovaComanda').classList.remove('active');
    document.getElementById('formNovaComanda').reset();
    
    showToast('Comanda criada com sucesso!', 'success');
    navegarPara('comandas');
}

// Finalizar Comanda
function abrirModalFinalizar(comandaId) {
    const comanda = comandas.find(c => c.id === comandaId);
    if (!comanda) return;
    
    const subtotal = calcularSubtotal(comanda);
    const taxa = subtotal * 0.1;
    const total = subtotal + taxa;
    
    document.getElementById('resumoSubtotal').textContent = formatarMoeda(subtotal);
    document.getElementById('resumoTaxa').textContent = formatarMoeda(taxa);
    document.getElementById('resumoTotal').textContent = formatarMoeda(total);
    
    document.getElementById('modalFinalizar').classList.add('active');
}

function confirmarFinalizacao() {
    const formaPagamento = document.getElementById('formaPagamento').value;
    
    if (!formaPagamento) {
        showToast('Selecione a forma de pagamento', 'error');
        return;
    }
    
    const comanda = comandas.find(c => c.id === currentComandaId);
    if (!comanda) return;
    
    comanda.status = 'finalizado';
    
    const mesa = mesas.find(m => m.numero === comanda.mesa);
    if (mesa) {
        mesa.status = 'disponivel';
        mesa.comanda = null;
    }
    
    document.getElementById('modalFinalizar').classList.remove('active');
    document.getElementById('formaPagamento').value = '';
    
    showToast('Comanda finalizada com sucesso!', 'success');
    navegarPara('comandas');
}

// Funções Auxiliares
function calcularSubtotal(comanda) {
    return comanda.itens.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
}

function calcularTotal(comanda) {
    const subtotal = calcularSubtotal(comanda);
    return subtotal + (subtotal * 0.1);
}

function calcularFaturamentoDia() {
    return comandas
        .filter(c => c.status === 'finalizado')
        .reduce((sum, c) => sum + calcularTotal(c), 0);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatarStatus(status) {
    const statusMap = {
        'pendente': 'Pendente',
        'atendimento': 'Em Atendimento',
        'preparo': 'Em Preparo',
        'pronto': 'Pronto',
        'finalizado': 'Finalizado'
    };
    return statusMap[status] || status;
}

function formatarStatusMesa(status) {
    const statusMap = {
        'disponivel': 'Disponível',
        'reservada': 'Reservada',
        'ocupada': 'Ocupada'
    };
    return statusMap[status] || status;
}

function formatarCargo(cargo) {
    const cargoMap = {
        'gerente': 'Gerente',
        'garcom': 'Garçom/Garçonete',
        'atendente': 'Atendente',
        'auxiliar': 'Auxiliar de Cozinha',
        'cozinheiro': 'Cozinheiro'
    };
    return cargoMap[cargo] || cargo;
}

function getStatusColor(status) {
    const colors = {
        'pendente': '#f57c00',
        'atendimento': '#1976d2',
        'preparo': '#ef6c00',
        'pronto': '#388e3c',
        'finalizado': '#757575'
    };
    return colors[status] || '#e2e8f0';
}

// Toast Notifications
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]} toast-icon"></i>
        <span class="toast-message">${message}</span>
    `;
    
    document.getElementById('toastContainer').appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}