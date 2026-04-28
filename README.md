# D&J INSTATEC — Site Institucional

Site profissional pronto para hospedar no **GitHub Pages**.

---

## 📁 Estrutura de pastas

```
djinstatec/
├── index.html          ← página principal
├── css/
│   └── style.css       ← todos os estilos
├── js/
│   └── main.js         ← animações, partículas, slider, formulário
├── images/
│   ├── logo.png        ← faixa com logo (banner)
│   ├── logo_icon.jpg   ← ícone do logo
│   └── [suas fotos]    ← adicione fotos do portfólio aqui
└── README.md
```

---

## 🚀 Como hospedar no GitHub Pages

### Passo 1 — Criar repositório
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"** (botão verde)
3. Nome sugerido: `djinstatec` (ou `site`)
4. Deixe como **Public**
5. Clique em **"Create repository"**

### Passo 2 — Fazer upload dos arquivos
1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste **toda a pasta** ou selecione todos os arquivos
3. Clique em **"Commit changes"**

### Passo 3 — Ativar o GitHub Pages
1. Vá em **Settings** (engrenagem no menu do repositório)
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione: `Deploy from a branch`
4. Em **"Branch"**, selecione: `main` → pasta `/ (root)`
5. Clique em **Save**

### Passo 4 — Acessar o site
Aguarde 1-2 minutos e acesse:
```
https://SEU_USUARIO.github.io/djinstatec/
```

---

## 📸 Como adicionar fotos do portfólio

1. Coloque as fotos na pasta `/images/`
2. No `index.html`, localize a seção `<!-- PORTFÓLIO -->`
3. Substitua os `portfolio-placeholder` por uma tag `<img>`:

```html
<!-- Antes (placeholder): -->
<div class="portfolio-placeholder">
  📷 <span>Sistema CFTV — Condomínio</span>
</div>

<!-- Depois (com foto real): -->
<img src="images/sua-foto.jpg" alt="Sistema CFTV instalado" style="width:100%;height:100%;object-fit:cover;" />
```

---

## ✏️ O que você pode personalizar facilmente

| O que mudar | Onde fica |
|---|---|
| Número de WhatsApp | Buscar `5511992137770` no index.html e main.js |
| E-mail | Buscar `djinstatec@gmail.com` |
| Número de projetos (contador) | `data-count="200"` no index.html |
| Anos de experiência | `data-count="5"` no index.html |
| Depoimentos | Seção `<!-- DEPOIMENTOS -->` no index.html |
| Cores | Variáveis no topo do `css/style.css` |
| Slogan | Primeira `<h1>` no index.html |

---

## 🎨 Paleta de cores usada

| Cor | Hex | Uso |
|---|---|---|
| Azul escuro | `#0B1A3B` | Fundo principal |
| Azul médio | `#1A3A6B` | Fundos secundários |
| Verde | `#2E7D32` | Marca / bordas |
| Verde neon | `#00E676` | Destaques / badges |
| Laranja | `#E67E22` | CTAs / botões |
| Branco | `#F0F4FF` | Textos |

---

Desenvolvido para **D&J INSTATEC** — Engenharia Elétrica e Automação · São Paulo/SP
