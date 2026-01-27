

## Plano: Promoção de Fevereiro com Verificação de Data

### Objetivo
Atualizar o popup promocional para exibir conteúdo diferente baseado na data atual:
- **Até 31 de Janeiro**: Mostra a promoção atual de Ano Novo
- **A partir de 1 de Fevereiro**: Mostra a nova promoção do Dia dos Namorados

---

## Resumo das Mudanças

| Arquivo | Mudança |
|---------|---------|
| `src/translations/pt.ts` | Adicionar traduções de Fevereiro (`promoFeb`) |
| `src/translations/en.ts` | Adicionar traduções de Fevereiro em inglês (`promoFeb`) |
| `src/components/PromoDialog.tsx` | Lógica para alternar entre promoções baseado na data |

---

## 1. Adicionar Traduções de Fevereiro (PT)

**Arquivo:** `src/translations/pt.ts`

Nova seção `promoFeb` com conteúdo do Dia dos Namorados:

```typescript
promoFeb: {
  title: "Mês do Amor 💕",
  mobileText: "Fevereiro é o mês do amor — a dois ou consigo mesmo.\n\n💑 Experiência a Dois:\nMassagem Casal com +15 minutos extra\n\n💫 Para solteiros:\nMassagem a Quatro Mãos com 10% desconto + Extra Shower grátis\n\n✨ Promoção contínua:\n10% desconto para novos clientes\n\nAgende a sua experiência.",
  desktopTitle: "Fevereiro é o mês do amor",
  desktopText: "Durante todo o mês de fevereiro, preparámos experiências especiais para celebrar o Dia dos Namorados de todas as formas.",
  sections: {
    couples: {
      title: "💑 Experiência a Dois",
      text: "Ao agendar a Massagem Casal, oferecemos +15 minutos extra, para um momento vivido sem pressa, com mais conexão e presença."
    },
    singles: {
      title: "💫 Para solteiros (e amantes do amor-próprio)",
      text: "Durante fevereiro, a Massagem a Quatro Mãos tem 10% de desconto e inclui Extra Shower gratuito, válido para clientes novos e clientes antigos."
    },
    ongoing: {
      title: "✨ Promoção contínua",
      text: "Clientes novos continuam a usufruir de 10% de desconto na primeira experiência."
    },
    extras: {
      title: "➕ Extras disponíveis",
      items: [
        "Extra Shower — realizado no início da experiência, antes da massagem, para criar maior envolvimento e conexão com o cliente",
        "Pedras Quentes — ideais para um relaxamento mais profundo"
      ]
    }
  },
  footer: "Agende a sua experiência e personalize o seu momento.",
  cta: "Porque o verdadeiro luxo está nos detalhes."
}
```

---

## 2. Adicionar Traduções de Fevereiro (EN)

**Arquivo:** `src/translations/en.ts`

```typescript
promoFeb: {
  title: "Month of Love 💕",
  mobileText: "February is the month of love — with someone else or with yourself.\n\n💑 Experience for Two:\nCouples Massage with +15 extra minutes\n\n💫 For singles:\nFour Hands Massage 10% off + free Extra Shower\n\n✨ Ongoing promotion:\n10% off for new clients\n\nBook your experience.",
  desktopTitle: "February is the month of love",
  desktopText: "Throughout February, we've prepared special experiences to celebrate Valentine's Month in every way.",
  sections: {
    couples: {
      title: "💑 Experience for Two",
      text: "When booking a Couples Massage, enjoy +15 extra minutes, allowing the experience to be lived without rush, with deeper connection and presence."
    },
    singles: {
      title: "💫 For singles (and self-love lovers)",
      text: "Throughout February, the Four Hands Massage offers 10% off and includes a complimentary Extra Shower, valid for new and returning clients."
    },
    ongoing: {
      title: "✨ Ongoing promotion",
      text: "New clients continue to enjoy 10% off their first experience."
    },
    extras: {
      title: "➕ Available extras",
      items: [
        "Extra Shower — performed at the beginning of the experience, before the massage, to create greater involvement and connection",
        "Hot Stones — ideal for deeper, more intense relaxation"
      ]
    }
  },
  footer: "Book your experience and personalize your moment.",
  cta: "Because true luxury is found in the details."
}
```

---

## 3. Atualizar PromoDialog com Lógica de Data

**Arquivo:** `src/components/PromoDialog.tsx`

### Mudanças:
1. Adicionar função para verificar se estamos em Fevereiro ou depois
2. Escolher dinamicamente entre `promo` (Janeiro) e `promoFeb` (Fevereiro)
3. Atualizar o ícone do header (Heart para Fevereiro)
4. Renderizar as novas seções estruturadas

### Lógica de data:
```typescript
const isFebruaryOrLater = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-indexed (Janeiro = 0, Fevereiro = 1)
  
  // Fevereiro 2026 ou posterior
  return (year === 2026 && month >= 1) || year > 2026;
};

const isFebPromo = isFebruaryOrLater();
const promoKey = isFebPromo ? 'promoFeb' : 'promo';
```

### Nova estrutura do Desktop para Fevereiro:
```
┌─────────────────────────────────────────┐
│  💕 Mês do Amor                         │  ← Header com Heart
├─────────────────────────────────────────┤
│  Fevereiro é o mês do amor              │  ← Título
│  (descrição)                            │
│                                         │
│  💑 Experiência a Dois                  │  ← Seção Casais
│  (texto sobre Massagem Casal)           │
│                                         │
│  💫 Para solteiros                      │  ← Seção Singles
│  (texto sobre Massagem a Quatro Mãos)   │
│                                         │
│  ✨ Promoção contínua                   │  ← Seção Ongoing
│  (10% desconto novos clientes)          │
│                                         │
│  ➕ Extras disponíveis                  │  ← Seção Extras
│  • Extra Shower                         │
│  • Pedras Quentes                       │
│                                         │
│  (footer + CTA)                         │
└─────────────────────────────────────────┘
```

---

## Comportamento Esperado

| Data | Conteúdo Exibido |
|------|------------------|
| 27 Jan 2026 | "Feliz Ano Novo ✨" - Promoção atual |
| 31 Jan 2026 | "Feliz Ano Novo ✨" - Promoção atual |
| 1 Fev 2026 | "Mês do Amor 💕" - Nova promoção |
| Todo Fev 2026 | "Mês do Amor 💕" - Nova promoção |

---

## Arquivos a Modificar

1. `src/translations/pt.ts` - Adicionar `promoFeb` com conteúdo em Português
2. `src/translations/en.ts` - Adicionar `promoFeb` com conteúdo em Inglês
3. `src/components/PromoDialog.tsx` - Lógica de data + novo layout para Fevereiro

---

## Detalhes Técnicos

### Verificação de Data
A função `isFebruaryOrLater()` usa o fuso horário local do navegador do usuário. Isso significa que às 00:00 do dia 1 de Fevereiro no horário de Lisboa, a promoção mudará automaticamente.

### Ícone do Header
- Janeiro: `Sparkles` (✨ brilho de Ano Novo)
- Fevereiro: `Heart` (💕 tema de amor)

### Cor do Gradiente
Manter o mesmo gradiente dourado para consistência com a marca, apenas mudar o ícone.

