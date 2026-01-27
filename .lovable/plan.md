

## Plano: Remover Cards de Contacto da Seção MapLocation

### O Que Será Removido

Os 3 cards com ícones (linhas 27-74):
- **Localização** (ícone MapPin + endereço)
- **Telefone** (ícone Phone + número)
- **WhatsApp** (ícone WhatsApp + número)

### O Que Permanece

1. **Informações de Estacionamento** - O bloco com título "Estacionamento" e botão "Ver Localização"
2. **Mapa do Google** - O iframe com o mapa interativo

### Estrutura Atual vs Nova

```
ANTES:
┌─────────────────────────────────────────┐
│  [Localização] [Telefone] [WhatsApp]    │ ← REMOVER
├─────────────────────────────────────────┤
│  Estacionamento                         │ ← MANTÉM
│  [Ver Localização do Estacionamento]    │
├─────────────────────────────────────────┤
│  [        MAPA DO GOOGLE            ]   │ ← MANTÉM
└─────────────────────────────────────────┘

DEPOIS:
┌─────────────────────────────────────────┐
│  Estacionamento                         │
│  [Ver Localização do Estacionamento]    │
├─────────────────────────────────────────┤
│  [        MAPA DO GOOGLE            ]   │
└─────────────────────────────────────────┘
```

### Mudanças no Arquivo

**Arquivo:** `src/components/MapLocation.tsx`

1. **Remover linhas 27-74** - O grid com os 3 cards de contacto
2. **Remover imports não utilizados** - `Phone` do lucide-react e `WhatsAppIcon`
3. **Remover função `handleWhatsAppClick`** - Já não será necessária
4. **Remover imports de analytics** - `trackWhatsAppClick` e `trackPhoneClick`

### Código Final Simplificado

```tsx
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const MapLocation = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-perola/30 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Parking Information */}
          <div className="mb-8 animate-fade-in-up">
            {/* ... conteúdo do estacionamento ... */}
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[450px] md:h-[500px]">
        <iframe ... />
      </div>
    </section>
  );
};
```

### Nota Importante

As informações de contacto (telefone e WhatsApp) continuam acessíveis através de:
- **FloatingContact** - O botão flutuante no canto inferior direito
- **Footer** - No rodapé da página
- **Contact Section** - Na seção de contacto

Portanto, remover estes cards não elimina a acessibilidade às informações de contacto.

