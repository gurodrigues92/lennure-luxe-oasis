import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useContent } from '@/hooks/useContent';
import { supabase } from '@/integrations/supabase/client';

const ContentEditor = () => {
  const { content, loading, refetch } = useContent();
  const [saving, setSaving] = useState(false);
  const [editedContent, setEditedContent] = useState<Record<string, any>>({});

  const handleFieldChange = (section: string, fieldKey: string, value: string) => {
    setEditedContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [fieldKey]: value,
      },
    }));
  };

  const handleSave = async (section: string) => {
    setSaving(true);
    try {
      const sectionEdits = editedContent[section] || {};
      const updates = Object.entries(sectionEdits);

      if (updates.length === 0) {
        toast.info('Nenhuma alteração para salvar');
        return;
      }

      for (const [fieldKey, fieldValue] of updates) {
        const language = fieldKey.endsWith('_en') ? 'en' : 'pt';
        const cleanFieldKey = fieldKey.replace('_en', '');

        const { error } = await supabase.functions.invoke('content', {
          body: {
            section,
            field_key: cleanFieldKey,
            field_value: fieldValue,
            language,
          },
        });

        if (error) throw error;
      }

      toast.success('Alterações salvas com sucesso!');
      setEditedContent((prev) => {
        const newState = { ...prev };
        delete newState[section];
        return newState;
      });
      await refetch();
    } catch (error: any) {
      console.error('Error saving content:', error);
      toast.error('Erro ao salvar: ' + (error.message || 'Erro desconhecido'));
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = (section: string) => {
    setEditedContent((prev) => {
      const newState = { ...prev };
      delete newState[section];
      return newState;
    });
    toast.info('Alterações descartadas');
  };

  const getFieldValue = (section: string, fieldKey: string) => {
    return editedContent[section]?.[fieldKey] ?? content[section]?.[fieldKey] ?? '';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Editor de Conteúdo</h2>
        <p className="text-muted-foreground">
          Edite os textos e conteúdos do site por seção
        </p>
      </div>

      <Tabs defaultValue="hero" className="w-full">
        <TabsList className="grid grid-cols-4 lg:grid-cols-6">
          <TabsTrigger value="hero">Hero</TabsTrigger>
          <TabsTrigger value="about">Sobre</TabsTrigger>
          <TabsTrigger value="services">Serviços</TabsTrigger>
          <TabsTrigger value="space">Espaço</TabsTrigger>
          <TabsTrigger value="testimonials">Depoimentos</TabsTrigger>
          <TabsTrigger value="contact">Contato</TabsTrigger>
        </TabsList>

        {/* Hero Section */}
        <TabsContent value="hero">
          <Card>
            <CardHeader>
              <CardTitle>Seção Hero</CardTitle>
              <CardDescription>
                Conteúdo principal da página inicial
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-title-pt">Título Principal (PT)</Label>
                  <Input
                    id="hero-title-pt"
                    value={getFieldValue('hero', 'title')}
                    onChange={(e) => handleFieldChange('hero', 'title', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-title-en">Título Principal (EN)</Label>
                  <Input
                    id="hero-title-en"
                    value={getFieldValue('hero', 'title_en')}
                    onChange={(e) => handleFieldChange('hero', 'title_en', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle-pt">Subtítulo (PT)</Label>
                  <Textarea
                    id="hero-subtitle-pt"
                    rows={3}
                    value={getFieldValue('hero', 'subtitle')}
                    onChange={(e) => handleFieldChange('hero', 'subtitle', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subtitle-en">Subtítulo (EN)</Label>
                  <Textarea
                    id="hero-subtitle-en"
                    rows={3}
                    value={getFieldValue('hero', 'subtitle_en')}
                    onChange={(e) => handleFieldChange('hero', 'subtitle_en', e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => handleDiscard('hero')}
                  disabled={saving || !editedContent.hero}
                >
                  Descartar
                </Button>
                <Button
                  onClick={() => handleSave('hero')}
                  disabled={saving || !editedContent.hero}
                >
                  {saving ? 'Salvando...' : 'Salvar Alterações'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Other sections - simplified for now */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Seção Sobre</CardTitle>
              <CardDescription>Em desenvolvimento</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Seção Serviços</CardTitle>
              <CardDescription>Em desenvolvimento</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="space">
          <Card>
            <CardHeader>
              <CardTitle>Seção Espaço</CardTitle>
              <CardDescription>Em desenvolvimento</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="testimonials">
          <Card>
            <CardHeader>
              <CardTitle>Seção Depoimentos</CardTitle>
              <CardDescription>Em desenvolvimento</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Seção Contato</CardTitle>
              <CardDescription>Em desenvolvimento</CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentEditor;
