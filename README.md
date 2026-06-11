# D&J INSTATEC — Site Institucional

Landing page de alta conversão para a **D&J INSTATEC — Engenharia Elétrica e Automação** (São Paulo/SP e Grande SP).
Site estático, sem backend, hospedado no **GitHub Pages**.

🔗 **No ar:** https://afamiliauniversal-boop.github.io/Djinstatec/

---

## 🎯 Objetivo

Converter a visita em contato imediato pelo WhatsApp. Toda a página é construída em torno do botão
**“Conversar no WhatsApp”** (fixo, sempre visível) e de chamadas de ação contextualizadas por serviço.

---

## 📁 Estrutura de pastas

```
Djinstatec/
├── index.html              ← página principal (HTML)
├── css/
│   └── style.css           ← todos os estilos (tema, layout, responsivo)
├── js/
│   └── main.js             ← menu, scroll reveal, contadores, filtro do portfólio, formulário→WhatsApp
├── images/
│   ├── logo.png            ← logo (banner) usado no header e no footer
│   └── logo_icon.jpg       ← ícone/favicon
├── .github/
│   └── workflows/
│       └── static.yml      ← deploy automático no GitHub Pages a cada push na main
└── README.md
```

> As fotos do **hero** e do **portfólio** são carregadas direto do **Unsplash** (URLs externas).
> Não há dependência de fotos locais — basta `images/` com o logo.

---

## 🚀 Publicação (deploy automático)

O deploy é **automático** via GitHub Actions (`.github/workflows/static.yml`):
a cada `git push` na branch **main**, o site é reconstruído e publicado no GitHub Pages em 1–2 minutos.

Não é preciso configurar nada manualmente. Para acompanhar: aba **Actions** do repositório.

### Atualizar o site pelo terminal
```bash
git add .
git commit -m "Atualiza conteúdo do site"
git push
```

---

## 🏢 Dados reais da empresa (usados no site)

| Campo | Valor |
|---|---|
| Nome | D&J INSTATEC — Engenharia Elétrica e Automação |
| CNPJ | 18.184.811/0001-55 (MEI ativo) |
| WhatsApp | (11) 99213-7770 → https://wa.me/5511992137770 |
| E-mail | djinstatec@gmail.com |
| Localização | São Paulo / SP e Grande SP |
| Site secundário | djinstatec.negocio.site |
| Responsável | Eletrotécnico, cursante de Engenharia Elétrica, técnico em Eletrônica e Mecânica, AutoCAD, NR-10 |

**Números de prova social (reais):** 500+ projetos · 15 anos de experiência · 93% de satisfação · 180 dias de garantia (90 por lei + 90 por conta da empresa).

**Serviços:** Instalações Elétricas · Manutenção Elétrica · Automação Residencial · Câmeras e CFTV ·
Iluminação e Tomadas · Energia Solar · Alarmes e Segurança · Projetos e Consultoria · Interfone e Portaria.

---

## ✏️ O que personalizar facilmente

| O que mudar | Onde fica |
|---|---|
| Número de WhatsApp | Buscar `5511992137770` em `index.html` e `js/main.js` |
| E-mail | Buscar `djinstatec@gmail.com` em `index.html` |
| Contadores (projetos, anos, %, garantia) | Atributos `data-target` na seção STATS do `index.html` |
| Depoimentos | Seção `<!-- DEPOIMENTOS -->` no `index.html` |
| Cores do tema | Bloco `:root` no topo de `css/style.css` |
| Imagem do hero | `<img>` dentro de `.hero-img` no `index.html` (URL do Unsplash) |
| Logo | Substituir `images/logo.png` (mantendo o nome) |

---

## 🎨 Paleta de cores (tema “Petróleo & Laranja”)

Estilo **misto**: seções de impacto escuras (azul petróleo) + seções de conteúdo claras.

| Cor | Hex | Uso |
|---|---|---|
| Azul petróleo | `#10243f` | Fundo do hero, header, footer e seções de destaque |
| Azul profundo | `#0c1c33` | Diferenciais, depoimentos e footer |
| Creme claro | `#fff7f0` | Fundo das seções de serviços, portfólio e contato |
| Laranja | `#ff7a18` | Cor de ação / destaques / CTAs secundários |
| Amarelo | `#FDB813` | Apoio |
| Verde | `#2ecc71` | Botões de WhatsApp (sempre) |
| Vermelho | `#e74c3c` | Apenas alertas de urgência |

---

## ♿ Robustez

- **Mobile-first** e responsivo.
- Animações com `IntersectionObserver` (scroll reveal + contadores), com **rede de segurança**:
  se o observer não disparar (ou o JS estiver desativado), todo o conteúdo é exibido normalmente
  (fallback via `<noscript>` e timeout).
- Sem backend: o formulário monta a mensagem e abre o WhatsApp (`wa.me`).

---

Desenvolvido para **D&J INSTATEC** — Engenharia Elétrica e Automação · São Paulo/SP
