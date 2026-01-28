

## Plano: Corrigir Layout e Estilos Conforme Solicitado

### Resumo dos Problemas Identificados

1. **Ordem das seções errada**: "Services" deve ser a PRIMEIRA seção após o Hero
2. **"Conheça nossos terapeutas" está no lugar errado**: Deve estar na seção Services (abaixo de "Ver Mais Serviços"), não no Hero
3. **Estilo do "Conheça nossos terapeutas" está ruim**: Letra muito pequena/fina, difícil de ler
4. **Título do VideoTour com fonte diferente**: "Conheça o Nosso Refúgio" usa `font-light`, enquanto "Diferenciais do Spa" usa `font-bold`

---

## Mudanças a Implementar

### 1. Mover "Conheça nossos terapeutas" do Hero para Services

**Arquivo:** `src/components/Hero.tsx`

Remover completamente a seção de terapeutas (linhas 53-86):
```tsx
// REMOVER DO HERO:
{/* Therapists Section */}
<div className="pt-6">
  <h3 className="font-cormorant text-xl md:text-2xl font-light text-gold mb-4">
    {t('hero.therapistsTitle')}
  </h3>
  {/* Botões de terapeutas */}
</div>
```

**Arquivo:** `src/components/Services.tsx`

Adicionar a seção de terapeutas ABAIXO do botão "Ver Mais Serviços" com o estilo correto:

```tsx
{/* CTA Button */}
<div className="text-center relative z-10 animate-fade-in" style={{ animationDelay: '400ms' }}>
  <Button ...>
    {t('services.cta')}
  </Button>
</div>

{/* NOVO: Therapists Section - abaixo do CTA */}
<div className="text-center relative z-10 mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
  <h3 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-8">
    {t('hero.therapistsTitle')}
  </h3>
  
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button 
      variant="goldOutline"
      size="lg"
      onClick={...}
      className="min-w-[200px] bg-gold/20 hover:bg-gold hover:text-white border-2 border-gold shadow-sm"
    >
      {t('differentials.female')}
    </Button>
    <Button ...>
      {t('differentials.male')}
    </Button>
  </div>
</div>
```

---

### 2. Corrigir Estilo do Título "Conheça nossos terapeutas"

**Estilo atual (errado):**
```tsx
<h3 className="font-cormorant text-xl md:text-2xl font-light text-gold mb-4">
```

**Estilo correto (igual ao "Conheça os Nossos Espaços"):**
```tsx
<h3 className="text-4xl md:text-5xl font-bold title-gold-gradient mb-8">
```

Comparação:
| Atributo | Antes (errado) | Depois (correto) |
|----------|----------------|------------------|
| Tamanho | `text-xl md:text-2xl` | `text-4xl md:text-5xl` |
| Peso | `font-light` | `font-bold` |
| Cor | `text-gold` | `title-gold-gradient` |
| Margem | `mb-4` | `mb-8` |

---

### 3. Padronizar Título do VideoTour

**Arquivo:** `src/components/VideoTour.tsx`

**Estilo atual (diferente):**
```tsx
<h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-white">
```

**Estilo correto (igual ao Differentials):**
```tsx
<h2 className="text-4xl md:text-5xl font-bold text-cream drop-shadow-sm">
```

Referência do Differentials.tsx:
```tsx
<h2 className="text-4xl md:text-5xl font-bold text-cream drop-shadow-sm mb-4">
```

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/components/Hero.tsx` | Remover seção de terapeutas (linhas 53-86) |
| `src/components/Services.tsx` | Adicionar seção de terapeutas abaixo do CTA + import de Button/useLanguage |
| `src/components/VideoTour.tsx` | Alterar estilo do título para `font-bold text-cream drop-shadow-sm` |

---

## Comparação Visual

### Antes:
```
┌─────────────────────────────────────────┐
│  HERO                                   │
│    Logo Lennure                         │
│    Título                               │
│    Conheça nossos terapeutas (pequeno)  │ ← ERRADO
│    [Femininas] [Masculinos]             │
│    [Marcar Sessão]                      │
├─────────────────────────────────────────┤
│  SERVICES                               │
│    Serviços Oferecidos                  │
│    [Cards]                              │
│    [Ver Mais Serviços]                  │
└─────────────────────────────────────────┘
```

### Depois:
```
┌─────────────────────────────────────────┐
│  HERO                                   │
│    Logo Lennure                         │
│    Título                               │
│    [Marcar Sessão]                      │
├─────────────────────────────────────────┤
│  SERVICES                               │
│    Serviços Oferecidos                  │
│    [Cards]                              │
│    [Ver Mais Serviços]                  │
│                                         │
│    CONHEÇA NOSSOS TERAPEUTAS (grande)   │ ← CORRETO
│    [Femininas] [Masculinos]             │
└─────────────────────────────────────────┘
```

---

## Detalhes Técnicos

### Classe CSS `title-gold-gradient` (já existe no projeto)
Esta classe aplica:
- Gradiente dourado no texto
- Efeito visual de destaque
- Mesmo estilo usado em "Conheça os Nossos Espaços" e "Serviços Oferecidos"

### Ordem das seções
A ordem atual no banco de dados já está correta:
```
hero → services → about → video → differentials → space → testimonials → philosophy → contact
```

Services já é a primeira seção após o Hero, então essa parte está OK.

