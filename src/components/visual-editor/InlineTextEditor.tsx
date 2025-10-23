import { useState, useEffect, useRef } from 'react';
import { useElementSelection } from '@/hooks/useElementSelection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Type, Palette } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const InlineTextEditor = () => {
  const { selectedElement } = useElementSelection();
  const [text, setText] = useState('');
  const [color, setColor] = useState('#000000');
  const [fontSize, setFontSize] = useState('16');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (selectedElement?.fieldKey) {
      loadContent();
    }
  }, [selectedElement]);

  const loadContent = async () => {
    if (!selectedElement?.fieldKey) return;

    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('field_value')
        .eq('section', selectedElement.section)
        .eq('field_key', selectedElement.fieldKey)
        .eq('language', 'pt')
        .maybeSingle();

      if (error) throw error;
      if (data) {
        setText(data.field_value || '');
      }
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  const saveContent = async (value: string) => {
    if (!selectedElement?.fieldKey) return;

    try {
      const { error } = await supabase
        .from('site_content')
        .upsert({
          section: selectedElement.section,
          field_key: selectedElement.fieldKey,
          field_value: value,
          field_type: 'text',
          language: 'pt'
        }, {
          onConflict: 'section,field_key,language'
        });

      if (error) throw error;

      toast.success('Texto atualizado!');
      
      // Reload iframe to show changes
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Erro ao salvar texto');
    }
  };

  const handleTextChange = (value: string) => {
    setText(value);

    // Debounce save
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      saveContent(value);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Type className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-sm">Editar Texto</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="text-content" className="text-xs">Conteúdo</Label>
          <textarea
            id="text-content"
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            className="w-full mt-1 min-h-[80px] px-3 py-2 text-sm border rounded-md bg-background"
            placeholder="Digite o texto..."
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="font-size" className="text-xs">Tamanho</Label>
            <Input
              id="font-size"
              type="number"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="mt-1"
              min="8"
              max="96"
            />
          </div>

          <div>
            <Label className="text-xs">Cor</Label>
            <div className="relative mt-1">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                <div
                  className="w-4 h-4 rounded border"
                  style={{ backgroundColor: color }}
                />
                <Palette className="h-4 w-4" />
              </Button>
              
              {showColorPicker && (
                <div className="absolute top-full mt-2 z-50 bg-background border rounded-lg p-3 shadow-lg">
                  <HexColorPicker color={color} onChange={setColor} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
