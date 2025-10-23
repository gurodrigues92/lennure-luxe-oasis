import { useState, useRef } from 'react';
import { useElementSelection } from '@/hooks/useElementSelection';
import { useImageUpload } from '@/hooks/useImageUpload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Link as LinkIcon, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const ImageEditor = () => {
  const { selectedElement } = useElementSelection();
  const { uploadImage, isUploading } = useImageUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedElement) return;

    const publicUrl = await uploadImage(file, selectedElement.section);
    if (publicUrl) {
      await updateImageInContent(publicUrl);
    }
  };

  const handleUrlSubmit = async () => {
    if (!imageUrl.trim() || !selectedElement) return;
    await updateImageInContent(imageUrl);
  };

  const updateImageInContent = async (url: string) => {
    if (!selectedElement?.fieldKey) {
      toast.error('Não foi possível identificar o campo da imagem');
      return;
    }

    try {
      const { error } = await supabase
        .from('site_content')
        .upsert({
          section: selectedElement.section,
          field_key: selectedElement.fieldKey,
          field_value: url,
          field_type: 'image',
          language: 'pt'
        }, {
          onConflict: 'section,field_key,language'
        });

      if (error) throw error;

      toast.success('Imagem atualizada!');
      
      // Reload iframe to show new image
      window.location.reload();
    } catch (error) {
      console.error('Error updating image:', error);
      toast.error('Erro ao atualizar imagem');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Upload className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-semibold text-sm">Editar Imagem</h3>
      </div>

      <div className="space-y-3">
        <div>
          <Label htmlFor="file-upload" className="text-xs">Upload de Arquivo</Label>
          <Input
            id="file-upload"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={isUploading}
            className="mt-1"
          />
          {isUploading && (
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>Enviando imagem...</span>
            </div>
          )}
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">ou</span>
          </div>
        </div>

        <div>
          <Label htmlFor="image-url" className="text-xs">URL da Imagem</Label>
          <div className="flex gap-2 mt-1">
            <Input
              id="image-url"
              type="url"
              placeholder="https://exemplo.com/imagem.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="flex-1"
            />
            <Button 
              size="sm" 
              onClick={handleUrlSubmit}
              disabled={!imageUrl.trim() || isUploading}
            >
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
