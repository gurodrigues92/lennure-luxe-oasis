

## Plano: Padronizar Estilos de Botões + Remover Seção "Venha conhecer-nos"

### Resumo do Problema

Atualmente, a página tem vários estilos diferentes de botões:

| Componente | Botão | Estilo Atual |
|------------|-------|--------------|
| **Hero** | Terapeutas Femininas/Masculinos | `goldOutline` + `bg-gold/20 border-2 border-gold` ✓ (padrão desejado) |
| **Hero** | Marcar Sessão Agora | `GradientButton` (mantém - é o CTA principal) |
| **Services** | Ver Mais Serviços | `goldOutline` simples (sem bg-gold/20) |
| **MapLocation** | Ver Localização do Estacionamento | `bg-gold text-white rounded-xl` (estilo custom inline) |
| **Testimonials** | Ver Mais Avaliações | `bg-gradient-to-r from-dourado via-dourado` (gradiente inline) |
| **Contact** | Falar no WhatsApp | `GradientButton` (mantém - é CTA de conversão) |

---

## Mudanças a Implementar

### 1. Padronizar Botões Secundários

Todos os botões que **NÃO** são de "Marcar Sessão" ou "Falar no WhatsApp" devem usar o mesmo estilo dos botões de Terapeutas:

```tsx
<Button 
  variant="goldOutline"
  size="lg"
  className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
>
```

**Características do estilo padrão:**
- Variante: `goldOutline`
- Fundo: `bg-gold/20` (dourado semitransparente)
- Hover: `hover:bg-gold hover:text-white`
- Borda: `border-2 border-gold`
- Sombra: `shadow-sm`

---

### 2. Arquivos a Modificar

#### A. `src/components/Services.tsx` (linha 73-92)

**Antes:**
```tsx
<Button 
  variant="goldOutline"
  size="lg"
  onClick={...}
  className="min-w-[250px] group"
>
  {t('services.cta')}
  <svg>...</svg>
</Button>
```

**Depois:**
```tsx
<Button 
  variant="goldOutline"
  size="lg"
  onClick={...}
  className="min-w-[250px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm group"
>
  {t('services.cta')}
  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform">...</svg>
</Button>
```

---

#### B. `src/components/MapLocation.tsx` (linha 102-110)

**Antes:**
```tsx
<a
  href="..."
  className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-white rounded-xl transition-colors font-medium shadow-md hover:shadow-lg"
>
  <MapPin className="w-5 h-5" />
  {t('mapLocation.parking.cta')}
</a>
```

**Depois:**
```tsx
<Button 
  variant="goldOutline"
  size="lg"
  onClick={() => window.open("...", "_blank")}
  className="bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
>
  <MapPin className="w-5 h-5" />
  {t('mapLocation.parking.cta')}
</Button>
```

---

#### C. `src/components/Testimonials.tsx` (linha 141-149)

**Antes:**
```tsx
<a
  href="..."
  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-dourado via-dourado to-dourado/90 hover:from-dourado/90 hover:to-dourado text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
>
  <Star className="w-5 h-5 fill-white" />
  <span>{t('testimonials.cta')}</span>
</a>
```

**Depois:**
```tsx
<Button 
  variant="goldOutline"
  size="lg"
  onClick={() => window.open("...", "_blank")}
  className="bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
>
  <Star className="w-5 h-5" />
  {t('testimonials.cta')}
</Button>
```

---

### 3. Remover Seção "Venha conhecer-nos"

**Arquivo:** `src/components/MapLocation.tsx` (linhas 26-30)

Remover o bloco do título:
```tsx
<div className="text-center mb-8 animate-fade-in">
  <h2 className="text-4xl md:text-5xl font-cormorant font-bold title-gold-gradient mb-6">
    {t('mapLocation.title')}
  </h2>
</div>
```

**Resultado:** A seção MapLocation continuará a mostrar:
- Cards de Localização, Telefone e WhatsApp
- Informações de Estacionamento
- Mapa do Google

Apenas o título "Venha conhecer-nos" será removido.

---

## Resumo das Mudanças

| Arquivo | Mudança |
|---------|---------|
| `src/components/Services.tsx` | Adicionar classes de estilo padrão ao botão |
| `src/components/MapLocation.tsx` | Converter `<a>` para `<Button>` + remover título |
| `src/components/Testimonials.tsx` | Converter `<a>` para `<Button>` com estilo padrão |

---

## Comparação Visual

**Antes:**
```
┌─────────────────────────────────────────┐
│  [Ver Mais Serviços] ← borda simples    │
│  [Ver Estacionamento] ← bg-gold sólido  │
│  [Ver Avaliações] ← gradiente dourado   │
└─────────────────────────────────────────┘
```

**Depois:**
```
┌─────────────────────────────────────────┐
│  [Ver Mais Serviços]  ← bg-gold/20 + border-2 │
│  [Ver Estacionamento] ← bg-gold/20 + border-2 │
│  [Ver Avaliações]     ← bg-gold/20 + border-2 │
└─────────────────────────────────────────┘
```

Todos com o mesmo visual: fundo dourado semitransparente, borda dourada, e hover que preenche com dourado sólido.

---

## Botões que NÃO serão alterados

| Botão | Motivo |
|-------|--------|
| "Marcar Sessão Agora" (Hero) | É o CTA principal - usa GradientButton |
| "Falar no WhatsApp" (Contact) | É o CTA de conversão - usa GradientButton |

Estes botões mantêm o estilo especial porque são as ações principais de conversão do site.

