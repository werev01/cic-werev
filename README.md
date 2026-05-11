# CIC · Central de Inteligência Comercial

> Protótipo navegável da Central de Inteligência Comercial — diretório de inteligência comercial baseado na metodologia WeRev.

**Apresentado no evento ICP (Imersão Comercial Previsível) · 15-16 de maio de 2026**

---

## 🎯 O que é

A **CIC** é uma camada de inteligência sobre o Pipedrive — não substitui o CRM, é o **portal comercial** da empresa. Materializa a metodologia WeRev (4 Pilares + 5 Engrenagens) em uma interface navegável.

Este repositório contém o protótipo HTML/CSS/JS estático das telas hero da apresentação.

---

## 📂 Estrutura do projeto

```
.
├── index.html              # Landing page com cards das telas
├── dashboard.html          # Tela 1 · Dashboard inicial
├── mapa-saude.html         # Tela 2 · Painel Estratégico (Pilares × Engrenagens)
├── daily-werev.html        # Tela 3 · Daily WeRev (6 passos)
├── motivos-perda.html      # Tela 4 · Motivos de Perda (vista por pessoa)
├── trafego.html            # Tela 5 · Tráfego (Meta Ads · Pós Med Reg)
├── sidebar.html            # Componente sidebar (carregado via fetch)
├── shared.css              # Estilos compartilhados (tema, layout)
├── shared.js               # Toggle de tema com localStorage
└── icons.svg               # Sprite de ícones simbólicos
```

---

## 🚀 Como rodar localmente

**ATENÇÃO:** os arquivos usam `fetch()` para carregar a sidebar, então **não funciona abrindo direto pelo `file://`**. Precisa de um servidor local:

### Opção 1 · Python (mais simples)
```bash
cd cic-html
python3 -m http.server 8000
```
Abre: http://localhost:8000

### Opção 2 · Node.js
```bash
cd cic-html
npx serve
```

### Opção 3 · VS Code
Instala a extensão **Live Server** e clica em "Go Live" no `index.html`.

---

## 🌐 Deploy no GitHub Pages

1. Cria o repositório no GitHub (ex: `cic-werev`)
2. Sobe os arquivos pra branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Protótipo inicial CIC"
   git branch -M main
   git remote add origin https://github.com/SEU-USER/cic-werev.git
   git push -u origin main
   ```
3. No GitHub: **Settings → Pages → Source: `main` / root → Save**
4. Em ~1 min sua CIC tá no ar em: `https://SEU-USER.github.io/cic-werev/`

---

## 🎨 Identidade visual (ICP brand book)

- **Azul Petróleo:** `#0c263b` (primária)
- **Azul Real:** `#083590` (acento)
- **Off-White:** `#e2e3de` (fundo claro)
- **Mostarda/Dourado:** `#c58a30` (destaque)
- **Verde positivo:** `#00a050`
- **Vermelho risco:** `#d92020`
- **Tipografia:** Poppins (via Google Fonts)

Toggle Claro/Escuro funcional em todas as telas (persiste via `localStorage`).

---

## 📊 Telas incluídas

| # | Tela | Status | Descrição |
|---|------|--------|-----------|
| 1 | Dashboard | ✅ | 6 blocos: pacing, painel estratégico, ML², engrenagens, volumetria, sinais |
| 2 | Painel Estratégico | ✅ | 4 Pilares × 5 Engrenagens · pilar mais quebrado em destaque · score 6.8/10 |
| 3 | Daily WeRev | ✅ | 6 passos colapsáveis · Inversão Estratégica com destaque gráfico |
| 4 | Motivos de Perda | ✅ | Top 10 + vista individual por pessoa (Arielma/Gabriel/Samantha) |
| 5 | Tráfego | ✅ | Meta Ads · custo + passagem · comparativo · tabela detalhada (MAR/ABR/26) |
| 6 | FollowUp Infinito | ⏳ | Em desenvolvimento |

---

## 📚 Metodologia WeRev (referência rápida)

**Manifesto:** "Inteligência Comercial é a disciplina de tornar o resultado comercial previsível através de dados, processo e ação."

**3 Crenças:**
1. Só melhoramos o que metrificamos
2. Toda venda é somatória de atividades
3. Perdemos mais do que vendemos — é onde está o ouro

**4 Pilares (caminho do lead):** Demanda · Pessoas · Ferramentas · Dados

**5 Engrenagens (ações contínuas):** Rotina · Ferramentas · Campo de Batalha · Dados · Melhoria Contínua

---

## ⚙️ Stack técnica

- HTML5 estático (zero build step)
- CSS puro com variáveis para tema claro/escuro
- JavaScript vanilla (sem frameworks)
- SVG inline para ícones e gráficos
- Google Fonts (Poppins)

---

## 🤝 Próximos passos

- [ ] Tela 5 · FollowUp Infinito Manager
- [ ] Tela Pipeline Review (5 frames)
- [ ] Tela Régua de Cadeiras
- [ ] Tela ML² Cockpit (4 níveis + 7 alavancas)
- [ ] Tela Métricas-chave

---

**Feito com ♥ pra apresentação ICP · maio/2026**
