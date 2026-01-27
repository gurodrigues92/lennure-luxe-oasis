

## Plano: Otimização da Landing Page Lennure Lux Spa

### Objetivo
Refatorar a landing page para melhorar a experiência do usuário e conversão, reorganizando seções, eliminando redundâncias e melhorando a visibilidade dos botões de terapeutas.

---

## Resumo das Mudanças

| Mudança | Arquivo | Ação |
|---------|---------|------|
| Reordenar seções | `useLayout.ts` | Mover "services" logo após "hero" |
| Reestruturar Hero | `Hero.tsx` | Adicionar título de terapeutas + mover CTA |
| Melhorar botões | `Hero.tsx` | Aumentar visibilidade com fundo sólido |
| Remover redundância | `VideoTour.tsx` | Remover seção de terapeutas |
| Remover redundância | `Differentials.tsx` | Remover botões de terapeutas |
| Remover CTA redundante | `Space.tsx` | Remover botão "Agendar Visita" |
| Atualizar traduções | `pt.ts`, `en.ts` | Adicionar novo título para terapeutas no Hero |

---

## 1. Reordenar Seções (Prioridade #1)

**Arquivo:** `src/hooks/useLayout.ts`

Alterar a ordem padrão das seções para que "Services" apareça logo após o Hero:

```typescript
// Antes:
const DEFAULT_SECTIONS = [
  'hero',
  'about',
  'video',
  'services',
  'differentials',
  'space',
  'testimonials',
  'philosophy',
  'contact',
];

// Depois:
const DEFAULT_SECTIONS = [
  'hero',
  'services',    // ← Movido para o topo
  'about',
  'video',
  'differentials',
  'space',
  'testimonials',
  'philosophy',
  'contact',
];
```

**Nova ordem visual da página:**
```
1. Hero (com botões de terapeutas)
2. Serviços Oferecidos (3 cards + botão)
3. Sobre Nós
4. Vídeo Tour
5. Diferenciais do Spa (sem botões de terapeutas)
6. Espaços (sem botão "Agendar Visita")
7. Testemunhos
8. Filosofia
9. Contato
10. Mapa
```

---

## 2. Reestruturar Hero Section

**Arquivo:** `src/components/Hero.tsx`

### Mudanças:
1. Adicionar título "Conheça nossos terapeutas" acima dos botões
2. Mover o CTA "Marcar Sessão Agora" para baixo dos botões de terapeutas
3. Melhorar visibilidade dos botões com fundo sólido dourado semi-transparente

### Nova estrutura do Hero:
```
┌─────────────────────────────────────────────────┐
│                    [Logo]                        │
│                                                  │
│      Bem-estar e experiência sensorial          │
│           no coração de Lisboa                  │
│                                                  │
│   (descrição do spa)                            │
│                                                  │
│       Conheça nossos terapeutas                 │  ← Novo título
│                                                  │
│ [Terapeutas Femininas] [Terapeutas Masculinos] │  ← Botões melhorados
│                                                  │
│       [====== Marcar Sessão Agora ======]       │  ← CTA movido para baixo
│                                                  │
└─────────────────────────────────────────────────┘
```

### Código das alterações:

```tsx
{/* Therapists Section */}
<div className="pt-6">
  <h3 className="font-cormorant text-xl md:text-2xl font-light text-gold mb-4">
    {t('hero.therapistsTitle')}
  </h3>
  
  {/* Secondary Therapist Buttons - IMPROVED VISIBILITY */}
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <Button 
      variant="goldOutline"
      size="lg"
      onClick={() => {...}}
      className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-gold"
    >
      {t('differentials.female')}
    </Button>
    <Button 
      variant="goldOutline"
      size="lg"
      onClick={() => {...}}
      className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-gold"
    >
      {t('differentials.male')}
    </Button>
  </div>
</div>

{/* Main CTA - NOW BELOW THERAPIST BUTTONS */}
<div className="pt-8">
  <GradientButton 
    variant="gold"
    onClick={handleWhatsAppClick}
    className="text-lg px-12 py-6 animate-glow-pulse"
  >
    {t('hero.cta')}
  </GradientButton>
</div>
```

---

## 3. Eliminar Redundâncias

### 3.1 Remover Seção de Terapeutas do VideoTour

**Arquivo:** `src/components/VideoTour.tsx`

Remover completamente a seção "Therapists Section" (linhas 42-73):

```tsx
// REMOVER ESTE BLOCO:
{/* Therapists Section */}
<div className="mt-12 text-center">
  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-white mb-6">
    {t('videoTour.therapistsTitle')}
  </h3>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    ...
  </div>
</div>
```

### 3.2 Remover Botões de Terapeutas dos Differentials

**Arquivo:** `src/components/Differentials.tsx`

Remover completamente a seção "Therapist Buttons" (linhas 77-103):

```tsx
// REMOVER ESTE BLOCO:
{/* Therapist Buttons */}
<div className="flex flex-row gap-3 justify-center mt-16 max-w-2xl mx-auto">
  <Button ...>
    {t('differentials.female')}
  </Button>
  <Button ...>
    {t('differentials.male')}
  </Button>
</div>
```

### 3.3 Remover CTA "Agendar Visita" do Space

**Arquivo:** `src/components/Space.tsx`

Remover a seção "Visit CTA" (linhas 110-121):

```tsx
// REMOVER ESTE BLOCO:
{/* Visit CTA */}
<div className="flex flex-col items-center mt-16">
  <div className="text-center space-y-4 max-w-md">
    <GradientButton 
      variant="gold"
      className="min-w-[250px] text-lg px-10 py-4"
      onClick={handleWhatsAppClick}
    >
      {t('space.cta')}
    </GradientButton>
  </div>
</div>
```

Também remover imports e funções não utilizadas após esta remoção.

---

## 4. Melhorar Visibilidade dos Botões de Terapeutas

**Arquivo:** `src/components/Hero.tsx`

Os botões atuais são muito transparentes contra o fundo. Nova estilização:

```tsx
// Antes (pouco visível):
className="min-w-[180px]"

// Depois (mais visível):
className="min-w-[180px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
```

**Características do novo estilo:**
- Fundo semi-transparente dourado (`bg-gold/20`)
- Borda dourada visível (`border-2 border-gold`)
- Hover transforma em botão sólido dourado
- Mantém elegância e consistência com a identidade visual

---

## 5. Atualizar Traduções

**Arquivo:** `src/translations/pt.ts`

Adicionar nova key para o título de terapeutas no Hero:

```typescript
hero: {
  title: "Bem-estar e experiência sensorial",
  subtitle: "no coração de Lisboa",
  description: "...",
  cta: "Marcar Sessão Agora",
  therapistsTitle: "Conheça nossos terapeutas"  // NOVO
}
```

**Arquivo:** `src/translations/en.ts`

```typescript
hero: {
  title: "Wellness and sensory experience",
  subtitle: "in the heart of Lisbon",
  description: "...",
  cta: "Book Session Now",
  therapistsTitle: "Meet our therapists"  // NOVO
}
```

---

## Resultado Final

### Antes (Problemas):
- Botões de terapeutas aparecem 3x na página
- "Agendar Visita" e "Falar no WhatsApp" aparecem múltiplas vezes
- Serviços estão muito abaixo na página
- Botões de terapeutas pouco visíveis
- Página muito longa com conteúdo repetitivo

### Depois (Otimizado):
- Botões de terapeutas aparecem apenas 1x (no Hero)
- CTAs simplificados + FloatingContact suficiente
- Serviços logo após o Hero (alta visibilidade)
- Botões de terapeutas com fundo dourado visível
- Página mais curta e objetiva

### Estrutura Visual Final:
```
┌─────────────────────────────────────────┐
│            HERO                          │
│   (Logo + Título + Terapeutas + CTA)    │
├─────────────────────────────────────────┤
│        SERVIÇOS OFERECIDOS              │
│       (3 cards + Ver Mais)              │
├─────────────────────────────────────────┤
│            SOBRE NÓS                     │
├─────────────────────────────────────────┤
│          VÍDEO TOUR                      │
│      (apenas vídeo, sem botões)         │
├─────────────────────────────────────────┤
│      DIFERENCIAIS DO SPA                │
│      (apenas grid de diferenciais)      │
├─────────────────────────────────────────┤
│          ESPAÇOS                         │
│      (apenas galeria, sem CTA)          │
├─────────────────────────────────────────┤
│         TESTEMUNHOS                      │
├─────────────────────────────────────────┤
│          FILOSOFIA                       │
├─────────────────────────────────────────┤
│          CONTATO                         │
├─────────────────────────────────────────┤
│           MAPA                           │
├─────────────────────────────────────────┤
│          FOOTER                          │
└─────────────────────────────────────────┘
       [Botão Flutuante de Contato]
```

---

## Arquivos a Modificar

1. `src/hooks/useLayout.ts` - Reordenar seções
2. `src/components/Hero.tsx` - Reestruturar layout + melhorar botões
3. `src/components/VideoTour.tsx` - Remover seção de terapeutas
4. `src/components/Differentials.tsx` - Remover botões de terapeutas
5. `src/components/Space.tsx` - Remover CTA "Agendar Visita"
6. `src/translations/pt.ts` - Adicionar `hero.therapistsTitle`
7. `src/translations/en.ts` - Adicionar `hero.therapistsTitle`

