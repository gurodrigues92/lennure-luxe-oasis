import { useElementSelection } from '@/hooks/useElementSelection';
import { useStyleEditor } from '@/hooks/useStyleEditor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HexColorPicker } from 'react-colorful';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export const StylePanel = () => {
  const { selectedElement } = useElementSelection();
  const { styles, updateStyle, resetStyles, loading } = useStyleEditor(selectedElement?.id);

  if (!selectedElement) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Painel de Estilos</CardTitle>
          <CardDescription>Selecione um elemento para editar seus estilos</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const handleColorChange = (property: string, color: string) => {
    updateStyle(property, color);
  };

  const handleInputChange = (property: string, value: string) => {
    updateStyle(property, value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Estilos</CardTitle>
        <CardDescription>
          {selectedElement.tag} - {selectedElement.id}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="colors">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="typography">Texto</TabsTrigger>
            <TabsTrigger value="spacing">Espaço</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Cor do Texto</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    style={{ backgroundColor: styles.color || '#000000' }}
                  >
                    <div className="w-6 h-6 rounded border mr-2" style={{ backgroundColor: styles.color || '#000000' }} />
                    {styles.color || 'Selecionar cor'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3">
                  <HexColorPicker 
                    color={styles.color || '#000000'} 
                    onChange={(color) => handleColorChange('color', color)} 
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Cor de Fundo</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <div className="w-6 h-6 rounded border mr-2" style={{ backgroundColor: styles.backgroundColor || 'transparent' }} />
                    {styles.backgroundColor || 'Selecionar cor'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-3">
                  <HexColorPicker 
                    color={styles.backgroundColor || '#ffffff'} 
                    onChange={(color) => handleColorChange('backgroundColor', color)} 
                  />
                </PopoverContent>
              </Popover>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Tamanho da Fonte</Label>
              <Input
                type="text"
                placeholder="Ex: 16px, 1.5rem"
                value={styles.fontSize || ''}
                onChange={(e) => handleInputChange('fontSize', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Peso da Fonte</Label>
              <Input
                type="text"
                placeholder="Ex: 400, 700, bold"
                value={styles.fontWeight || ''}
                onChange={(e) => handleInputChange('fontWeight', e.target.value)}
              />
            </div>
          </TabsContent>

          <TabsContent value="spacing" className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Padding</Label>
              <Input
                type="text"
                placeholder="Ex: 16px, 1rem 2rem"
                value={styles.padding || ''}
                onChange={(e) => handleInputChange('padding', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Margin</Label>
              <Input
                type="text"
                placeholder="Ex: 16px, 1rem 2rem"
                value={styles.margin || ''}
                onChange={(e) => handleInputChange('margin', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Border Radius</Label>
              <Input
                type="text"
                placeholder="Ex: 8px, 0.5rem"
                value={styles.borderRadius || ''}
                onChange={(e) => handleInputChange('borderRadius', e.target.value)}
              />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex gap-2">
          <Button onClick={resetStyles} variant="outline" className="flex-1" disabled={loading}>
            Resetar Estilos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
