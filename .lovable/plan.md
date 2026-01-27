

## Plano: Corrigir Ordem das Seções e Seção "Venha conhecer-nos"

### Problema Identificado

O banco de dados possui um layout salvo que está sobrescrevendo a ordem padrão:

**Ordem atual no banco de dados:**
```
hero → about → video → services → differentials → space → testimonials → philosophy → contact
```

**Ordem desejada:**
```
hero → services → about → video → differentials → space → testimonials → philosophy → contact
```

---

### Mudanças a Implementar

#### 1. Atualizar Layout no Banco de Dados

Executar um UPDATE na tabela `site_layout` para corrigir a ordem das seções:

```sql
UPDATE site_layout 
SET layout_data = '{"sections": ["hero", "services", "about", "video", "differentials", "space", "testimonials", "philosophy", "contact"]}'::jsonb,
    updated_at = now()
WHERE id = '1862c0db-9f9b-4aa3-b727-8e311bc5a0f7';
```

---

#### 2. Sobre a Seção "Venha conhecer-nos"

A seção "Venha conhecer-nos" é a seção do **Mapa/Localização** (`MapLocation.tsx`). Esta seção:
- Mostra o título "Venha conhecer-nos"
- Contém informações de localização, telefone e WhatsApp
- Exibe o mapa do Google Maps

**Opções disponíveis:**

| Opção | Descrição |
|-------|-----------|
| A | Remover completamente a seção MapLocation (mapa + informações) |
| B | Manter a seção mas remover apenas o título "Venha conhecer-nos" |
| C | Manter a seção como está |

**Recomendação:** A opção B (remover só o título) pode ser uma boa escolha, pois mantém as informações úteis de contato/localização sem o título redundante.

---

### Arquivos a Modificar

1. **Banco de Dados** - Atualizar `site_layout` com nova ordem
2. **`src/components/MapLocation.tsx`** - Remover título (se escolher opção B)
3. **`src/pages/Index.tsx`** - Remover seção MapLocation (se escolher opção A)

---

### Resultado Esperado

Após as mudanças, a ordem das seções será:

```
1. Hero (com botões de terapeutas + CTA)
2. Serviços Oferecidos ← MOVIDO PARA CÁ
3. Sobre Nós
4. Vídeo Tour
5. Diferenciais do Spa
6. Espaços
7. Testemunhos
8. Filosofia
9. Contato
10. Mapa (opcional, dependendo da escolha)
```

