

## Plano: Corrigir Centralização do Botão CTA e Ícone do Mouse no Hero

### Problema Identificado

O botão "Marcar Sessão" e o ícone do mouse (scroll indicator) não parecem estar 100% alinhados. Após análise do código:

1. **O botão CTA** está dentro de um `<div className="pt-8">` que não tem `flex justify-center` explícito
2. **O ícone do mouse** está com `bottom-4` (apenas 16px da borda inferior), o que pode parecer desproporcionado

---

### Mudanças a Implementar

**Arquivo:** `src/components/Hero.tsx`

#### 1. Adicionar Centralização Explícita ao Wrapper do Botão CTA

**Antes (linha 89):**
```tsx
<div className="pt-8">
```

**Depois:**
```tsx
<div className="pt-8 flex justify-center">
```

#### 2. Ajustar Posição do Scroll Indicator

**Antes (linha 102):**
```tsx
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
```

**Depois:**
```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
```

---

### Comparação Visual

| Elemento | Antes | Depois |
|----------|-------|--------|
| Botão CTA | `text-center` implícito | `flex justify-center` explícito |
| Scroll Indicator | `bottom-4` (16px) | `bottom-8` (32px) |

---

### Resultado Esperado

```
┌────────────────────────────────────────┐
│                                        │
│            [Logo Lennure]              │
│                                        │
│     A Arte do Bem-Estar de Luxo        │
│      Bem-Estar Personalizado           │
│                                        │
│    Conheça os Nossos Terapeutas        │
│  [Femininas]        [Masculinos]       │
│                                        │
│         [ Marcar Sessão ]              │  ← Centralizado com flex
│                                        │
│                                        │
│               ⬇ mouse                  │  ← Mais espaço (32px)
└────────────────────────────────────────┘
```

---

### Detalhes Técnicos

#### Por que `flex justify-center` é melhor que `text-center`:

- `text-center` funciona bem para elementos inline, mas pode ter comportamento inconsistente com elementos block
- `flex justify-center` garante centralização perfeita para qualquer tipo de elemento filho
- Combinado com `inline-flex` do botão, cria um alinhamento preciso

#### Por que `bottom-8` em vez de `bottom-4`:

- `bottom-4` (16px) é muito próximo da borda em telas grandes
- `bottom-8` (32px) cria uma proporção mais equilibrada
- Mantém o ícone visível e com espaço respirável

---

### Arquivo a Modificar

- `src/components/Hero.tsx` - Linhas 89 e 102

