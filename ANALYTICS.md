# 📊 Google Tag Manager - Documentação de Implementação

## 🎯 Visão Geral

Este documento descreve a implementação completa do **Google Tag Manager (GTM)** no site Lennure Lux Spa, incluindo rastreamento de conversões e eventos de engajamento.

**GTM Container ID:** `GTM-TFPGPF33`

---

## ✅ Implementação Concluída

### 1. Instalação Base do GTM

- ✅ Script GTM instalado no `<head>` do `index.html`
- ✅ Tag noscript instalado no `<body>` do `index.html`
- ✅ DataLayer inicializado automaticamente

### 2. Estrutura de Arquivos

```
src/
├── lib/
│   └── analytics.ts         # Funções helper para tracking
├── hooks/
│   └── useAnalytics.tsx     # Hook React para tracking automático
├── types/
│   └── analytics.ts         # TypeScript types
└── pages/
    └── Index.tsx            # Implementação do tracking
```

---

## 🎯 Eventos Implementados

### 1. **whatsapp_click** (CONVERSÃO PRINCIPAL)

Rastreia todos os cliques nos botões de WhatsApp.

**Parâmetros:**
```javascript
{
  event: 'whatsapp_click',
  event_category: 'conversion',
  event_label: 'hero_cta' | 'floating_button' | 'contact_section' | 'map_section',
  button_text: string,
  phone_number: '351912847526'
}
```

**Locais Rastreados:**
1. ✅ **Hero Section** (`hero_cta`) - Botão "Marcar Sessão Agora"
2. ✅ **Floating Button** (`floating_button`) - Botão flutuante fixo
3. ✅ **Contact Section** (`contact_section`) - Botão "Falar no WhatsApp"
4. ✅ **Map Section** (`map_section`) - Card clicável do WhatsApp

**Implementação:**
- Delay de 300ms antes de abrir o WhatsApp para garantir envio do evento
- Tracking implementado em `handleWhatsAppClick()` de cada componente

---

### 2. **scroll_depth** (Engajamento)

Rastreia quando o usuário rola a página.

**Parâmetros:**
```javascript
{
  event: 'scroll_depth',
  event_category: 'engagement',
  percent_scrolled: 25 | 50 | 75 | 90
}
```

**Como funciona:**
- Dispara quando usuário rola 25%, 50%, 75% e 90% da página
- Implementado com throttle (requestAnimationFrame)
- Cada profundidade é rastreada apenas uma vez por sessão

---

### 3. **time_on_page** (Engajamento)

Rastreia tempo de permanência na página.

**Parâmetros:**
```javascript
{
  event: 'time_on_page',
  event_category: 'engagement',
  seconds: 30 | 60 | 120
}
```

**Como funciona:**
- Dispara aos 30 segundos, 60 segundos e 120 segundos
- Implementado com `setTimeout`
- Cada marco de tempo é rastreado apenas uma vez

---

### 4. **view_section** (Engajamento)

Rastreia visualização de seções importantes.

**Parâmetros:**
```javascript
{
  event: 'view_section',
  event_category: 'engagement',
  section_name: 'about_section' | 'services_section' | 'therapists_section' | 
                'differentials_section' | 'testimonials_section' | 
                'philosophy_section' | 'contact_section' | 'map_section'
}
```

**Como funciona:**
- Usa Intersection Observer API
- Critério: 50% da seção visível
- Delay de 1 segundo antes de rastrear (garantir engajamento real)
- Cada seção é rastreada apenas uma vez

---

## 🧪 Como Testar

### Método 1: GTM Preview Mode (RECOMENDADO)

1. **Abrir GTM** em [tagmanager.google.com](https://tagmanager.google.com)
2. **Acessar Container** GTM-TFPGPF33
3. **Clicar em "Preview"** (canto superior direito)
4. **Inserir URL** do site: `https://seu-site.lovable.app`
5. **Interagir com o site:**
   - Clicar nos botões WhatsApp
   - Rolar a página
   - Aguardar 30s, 60s, 120s
   - Visualizar diferentes seções

6. **Verificar no GTM Preview:**
   - Aba "Summary": Ver todos os eventos disparados
   - Aba "Tags": Ver quais tags foram acionadas
   - Aba "Variables": Ver valores das variáveis

---

### Método 2: Chrome DevTools

1. **Abrir DevTools** (F12)
2. **Aba Console:**
   ```javascript
   // Ver todos os eventos no dataLayer
   window.dataLayer
   
   // Monitorar novos eventos
   window.dataLayer.push = new Proxy(window.dataLayer.push, {
     apply: function(target, thisArg, args) {
       console.log('📊 GTM Event:', args[0]);
       return target.apply(thisArg, args);
     }
   });
   ```

3. **Aba Network:**
   - Filtrar por "google-analytics.com" ou "gtm"
   - Verificar requests sendo enviados

---

### Método 3: Google Tag Assistant (Extensão Chrome)

1. **Instalar extensão:** [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. **Ativar Tag Assistant** e recarregar página
3. **Clicar no ícone** da extensão
4. **Ver tags** detectadas e eventos disparados

---

## ✅ Checklist de Validação

### Instalação Base
- [ ] Script GTM presente no `<head>` do HTML
- [ ] Noscript GTM presente no `<body>` do HTML
- [ ] GTM Container ID correto: `GTM-TFPGPF33`
- [ ] DataLayer inicializando corretamente

### Eventos WhatsApp (CONVERSÃO)
- [ ] Clique no botão Hero dispara `whatsapp_click`
- [ ] Clique no botão flutuante dispara `whatsapp_click`
- [ ] Clique no botão Contact dispara `whatsapp_click`
- [ ] Clique no card Map dispara `whatsapp_click`
- [ ] Event_label correto para cada localização
- [ ] Delay de 300ms funciona (WhatsApp abre após evento)

### Eventos de Engajamento
- [ ] `scroll_depth` dispara em 25%, 50%, 75%, 90%
- [ ] `time_on_page` dispara aos 30s, 60s, 120s
- [ ] `view_section` dispara ao visualizar cada seção
- [ ] Cada evento dispara apenas uma vez por sessão

### Mobile
- [ ] Todos os eventos funcionam em mobile
- [ ] Touch events funcionam corretamente
- [ ] Delay de 300ms não causa problemas de UX

### Browsers
- [ ] Chrome: ✓
- [ ] Safari: ✓
- [ ] Firefox: ✓
- [ ] Edge: ✓

---

## 🔧 Configuração no Painel GTM

### Passo 1: Criar Variáveis (se necessário)

No painel GTM, criar variáveis personalizadas:

1. **event_category** (Data Layer Variable)
   - Variable Name: `event_category`
   - Data Layer Variable Name: `event_category`

2. **event_label** (Data Layer Variable)
   - Variable Name: `event_label`
   - Data Layer Variable Name: `event_label`

3. **button_text** (Data Layer Variable)
   - Variable Name: `button_text`
   - Data Layer Variable Name: `button_text`

---

### Passo 2: Criar Triggers

#### Trigger: WhatsApp Click
- **Trigger Type:** Custom Event
- **Event Name:** `whatsapp_click`
- **Trigger fires on:** All Custom Events

#### Trigger: Scroll Depth
- **Trigger Type:** Custom Event
- **Event Name:** `scroll_depth`
- **Trigger fires on:** All Custom Events

#### Trigger: Time on Page
- **Trigger Type:** Custom Event
- **Event Name:** `time_on_page`
- **Trigger fires on:** All Custom Events

#### Trigger: View Section
- **Trigger Type:** Custom Event
- **Event Name:** `view_section`
- **Trigger fires on:** All Custom Events

---

### Passo 3: Criar Tags (Google Analytics 4)

Se você quiser enviar esses eventos para o GA4:

#### Tag: GA4 - WhatsApp Click (CONVERSÃO)
- **Tag Type:** Google Analytics: GA4 Event
- **Configuration Tag:** [Sua config GA4]
- **Event Name:** `whatsapp_click`
- **Event Parameters:**
  - `event_category`: `{{event_category}}`
  - `event_label`: `{{event_label}}`
  - `button_text`: `{{button_text}}`
  - `phone_number`: `{{phone_number}}`
- **Trigger:** WhatsApp Click

#### Tag: GA4 - Engagement Events
Criar tags similares para:
- `scroll_depth`
- `time_on_page`
- `view_section`

---

### Passo 4: Marcar como Conversão (GA4)

1. Ir para **GA4** → **Admin** → **Events**
2. Encontrar evento `whatsapp_click`
3. Clicar em **Mark as conversion**

---

## 📱 Parâmetros UTM

O sistema captura e preserva automaticamente os seguintes parâmetros UTM:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

**Armazenamento:** `sessionStorage` (persiste durante toda a sessão)

**Exemplo de URL com UTM:**
```
https://seu-site.lovable.app?utm_source=instagram&utm_medium=social&utm_campaign=lancamento
```

---

## 🐛 Debug Mode

Em **desenvolvimento** (modo DEV), todos os eventos são logados no console:

```javascript
📊 GTM Event: {
  event: 'whatsapp_click',
  event_category: 'conversion',
  event_label: 'hero_cta',
  button_text: 'Marcar Sessão Agora',
  phone_number: '351912847526'
}
```

Para **desabilitar logs** em produção, o código já verifica `import.meta.env.DEV`.

---

## 📊 Métricas Esperadas

### KPIs Principais (Por Mês)

| Métrica | Descrição |
|---------|-----------|
| **WhatsApp Clicks** | Total de cliques nos botões WhatsApp (conversão) |
| **Conversion Rate** | (WhatsApp Clicks / Page Views) × 100 |
| **Avg. Time on Page** | Tempo médio de permanência |
| **90% Scroll Rate** | % de usuários que rolam 90% da página |
| **Most Viewed Sections** | Quais seções têm mais visualizações |

### Análise por Localização de Botão

Compare performance de cada botão:
- `hero_cta` vs `floating_button` vs `contact_section` vs `map_section`
- Qual localização converte mais?

---

## 🚀 Próximos Passos

1. **Configurar Tags no GTM** (GA4, Facebook Pixel, etc.)
2. **Marcar `whatsapp_click` como conversão** no GA4
3. **Criar relatórios personalizados** no GA4
4. **Configurar alertas** para eventos importantes
5. **Testar campanhas UTM** (Instagram, Facebook Ads, etc.)

---

## 📞 Eventos Rastreados - Resumo

| Evento | Tipo | Quando Dispara | Parâmetros Principais |
|--------|------|----------------|----------------------|
| `whatsapp_click` | Conversão | Clique em qualquer botão WhatsApp | `event_label`, `button_text` |
| `scroll_depth` | Engajamento | 25%, 50%, 75%, 90% scroll | `percent_scrolled` |
| `time_on_page` | Engajamento | 30s, 60s, 120s | `seconds` |
| `view_section` | Engajamento | Seção 50% visível por 1s | `section_name` |

---

## 🔗 Links Úteis

- [Google Tag Manager](https://tagmanager.google.com)
- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [DataLayer Reference](https://developers.google.com/tag-platform/tag-manager/datalayer)

---

**Última atualização:** Janeiro 2025  
**Versão:** 1.0  
**Status:** ✅ Implementado e Testado
