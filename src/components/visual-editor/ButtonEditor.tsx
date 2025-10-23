import { useState } from 'react';
import { useElementSelection } from '@/hooks/useElementSelection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MousePointer, Palette } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

export const ButtonEditor = () => {
  const { selectedElement } = useElementSelection();
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  const [bgColor, setBgColor] = useState('#D4AF37');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [showBgPicker, setShowBgPicker] = useState(false);
  const [showTextPicker, setShowTextPicker] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MousePointer className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-sm">Editar Botão</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="button-text" className="text-xs">Texto do Botão</Label>
          <Input
            id="button-text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            placeholder="Agendar Agora"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="button-url" className="text-xs">Link/Ação</Label>
          <Input
            id="button-url"
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
            placeholder="/contato"
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-xs">Cor de Fundo</Label>
            <div className="relative mt-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
                onClick={() => setShowBgPicker(!showBgPicker)}
              >
                <div
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: bgColor }}
                />
                <Palette className="h-4 w-4" />
              </Button>
              
              {showBgPicker && (
                <div className="absolute top-full mt-2 z-50 bg-background border rounded-lg p-3 shadow-lg">
                  <HexColorPicker color={bgColor} onChange={setBgColor} />
                </div>
              )}
            </div>
          </div>

          <div>
            <Label className="text-xs">Cor do Texto</Label>
            <div className="relative mt-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-start gap-2"
                onClick={() => setShowTextPicker(!showTextPicker)}
              >
                <div
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: textColor }}
                />
                <Palette className="h-4 w-4" />
              </Button>
              
              {showTextPicker && (
                <div className="absolute top-full mt-2 z-50 bg-background border rounded-lg p-3 shadow-lg">
                  <HexColorPicker color={textColor} onChange={setTextColor} />
                </div>
              )}
            </div>
          </div>
        </div>

        <Button className="w-full" size="sm">
          Aplicar Mudanças
        </Button>
      </div>
    </div>
  );
};
