

## Plano: Adicionar Botões de Terapeutas no Hero e Após o Vídeo

### Objetivo
Adicionar botões secundários "Terapeutas Femininas" e "Terapeutas Masculinos" em duas localizações:
1. Na primeira dobra (Hero), abaixo do botão "Marcar Sessão Agora"
2. Logo após a seção de vídeo, com título "Conheça nossos terapeutas"

---

### Mudanças a Implementar

#### 1. Atualizar Hero.tsx

Adicionar dois botões secundários abaixo do CTA principal, usando a variante `goldOutline` para manter hierarquia visual:

```
┌─────────────────────────────────────────┐
│              [Logo]                      │
│                                          │
│     Bem-estar e experiência sensorial   │
│        no coração de Lisboa             │
│                                          │
│  [====== Marcar Sessão Agora ======]    │  ← Botão principal (GradientButton)
│                                          │
│  [Terapeutas Femininas] [Terapeutas Masculinos]  │  ← Novos botões secundários
│                                          │
└─────────────────────────────────────────┘
```

**Código a adicionar (após o GradientButton):**

```tsx
{/* Secondary Therapist Buttons */}
<div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
  <Button 
    variant="goldOutline"
    size="lg"
    onClick={() => {
      const baseUrl = "https://www.lennureluxspa.com";
      const path = language === 'en' ? '/en/terapeutas-femininas' : '/terapeutas-femininas';
      window.open(`${baseUrl}${path}`, "_blank");
    }}
    className="min-w-[180px]"
  >
    {t('differentials.female')}
  </Button>
  <Button 
    variant="goldOutline"
    size="lg"
    onClick={() => {
      const baseUrl = "https://www.lennureluxspa.com";
      const path = language === 'en' ? '/en/terapeutas-masculinos' : '/terapeutas-masculinos';
      window.open(`${baseUrl}${path}`, "_blank");
    }}
    className="min-w-[180px]"
  >
    {t('differentials.male')}
  </Button>
</div>
```

**Imports a adicionar:**
- `Button` de `@/components/ui/button`
- Usar `language` do hook `useLanguage()`

---

#### 2. Atualizar VideoTour.tsx

Adicionar nova seção após o subtítulo do vídeo com título e botões:

```
┌─────────────────────────────────────────┐
│         Conheça o Nosso Refúgio         │
│                                          │
│          [===============]               │  ← Vídeo
│          [     VIDEO     ]               │
│          [===============]               │
│                                          │
│     Uma experiência sensorial...         │
│                                          │
│      Conheça nossos terapeutas          │  ← Novo título
│                                          │
│  [Terapeutas Femininas] [Terapeutas Masculinos]  │  ← Novos botões
│                                          │
└─────────────────────────────────────────┘
```

**Código a adicionar (após o subtítulo):**

```tsx
{/* Therapists Section */}
<div className="mt-12 text-center">
  <h3 className="font-cormorant text-2xl md:text-3xl font-light text-white mb-6">
    {t('videoTour.therapistsTitle')}
  </h3>
  <div className="flex flex-col sm:flex-row gap-3 justify-center">
    <Button 
      variant="outline"
      size="lg"
      onClick={() => {
        const baseUrl = "https://www.lennureluxspa.com";
        const path = language === 'en' ? '/en/terapeutas-femininas' : '/terapeutas-femininas';
        window.open(`${baseUrl}${path}`, "_blank");
      }}
      className="min-w-[180px] bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
    >
      {t('differentials.female')}
    </Button>
    <Button 
      variant="outline"
      size="lg"
      onClick={() => {
        const baseUrl = "https://www.lennureluxspa.com";
        const path = language === 'en' ? '/en/terapeutas-masculinos' : '/terapeutas-masculinos';
        window.open(`${baseUrl}${path}`, "_blank");
      }}
      className="min-w-[180px] bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white"
    >
      {t('differentials.male')}
    </Button>
  </div>
</div>
```

**Imports a adicionar:**
- `Button` de `@/components/ui/button`
- Usar `language` do hook `useLanguage()`

---

#### 3. Atualizar Traduções

**src/translations/pt.ts - Adicionar:**
```typescript
videoTour: {
  title: "Conheça o Nosso Refúgio",
  subtitle: "Uma experiência sensorial...",
  therapistsTitle: "Conheça nossos terapeutas"  // NOVO
}
```

**src/translations/en.ts - Adicionar:**
```typescript
videoTour: {
  title: "Discover Our Sanctuary",
  subtitle: "A sensory experience...",
  therapistsTitle: "Meet our therapists"  // NOVO
}
```

---

### Detalhes Técnicos

| Componente | Estilo dos Botões | Responsividade |
|------------|-------------------|----------------|
| Hero | `goldOutline` - borda dourada, fundo transparente | `flex-col sm:flex-row` - empilhados em mobile |
| VideoTour | `outline` com classes customizadas brancas | `flex-col sm:flex-row` - empilhados em mobile |

**Comportamento dos botões:**
- Ambos os botões abrem links externos para o site principal
- PT: `/terapeutas-femininas` e `/terapeutas-masculinos`
- EN: `/en/terapeutas-femininas` e `/en/terapeutas-masculinos`
- Reutilizam as traduções já existentes em `differentials.female` e `differentials.male`

---

### Arquivos a Modificar

1. `src/components/Hero.tsx` - Adicionar botões secundários
2. `src/components/VideoTour.tsx` - Adicionar seção de terapeutas
3. `src/translations/pt.ts` - Adicionar `therapistsTitle`
4. `src/translations/en.ts` - Adicionar `therapistsTitle`

