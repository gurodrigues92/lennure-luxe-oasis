import { useState } from 'react';
import { useElementSelection } from '@/hooks/useElementSelection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Layout, Palette } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

export const SectionEditor = () => {
  const { selectedElement } = useElementSelection();
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [paddingTop, setPaddingTop] = useState([64]);
  const [paddingBottom, setPaddingBottom] = useState([64]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layout className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-sm">Editar Seção</h3>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="text-xs">Cor de Fundo</Label>
          <div className="relative mt-1">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => setShowColorPicker(!showColorPicker)}
            >
              <div
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: bgColor }}
              />
              <Palette className="h-4 w-4" />
              <span className="text-xs">{bgColor}</span>
            </Button>
            
            {showColorPicker && (
              <div className="absolute top-full mt-2 z-50 bg-background border rounded-lg p-3 shadow-lg">
                <HexColorPicker color={bgColor} onChange={setBgColor} />
              </div>
            )}
          </div>
        </div>

        <div>
          <Label className="text-xs">Espaçamento Superior: {paddingTop[0]}px</Label>
          <Slider
            value={paddingTop}
            onValueChange={setPaddingTop}
            min={0}
            max={200}
            step={8}
            className="mt-2"
          />
        </div>

        <div>
          <Label className="text-xs">Espaçamento Inferior: {paddingBottom[0]}px</Label>
          <Slider
            value={paddingBottom}
            onValueChange={setPaddingBottom}
            min={0}
            max={200}
            step={8}
            className="mt-2"
          />
        </div>

        <Button className="w-full" size="sm">
          Aplicar Mudanças
        </Button>
      </div>
    </div>
  );
};
