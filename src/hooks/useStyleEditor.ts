import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ElementStyles {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  [key: string]: string | undefined;
}

export const useStyleEditor = (elementId?: string) => {
  const [styles, setStyles] = useState<ElementStyles>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (elementId) {
      fetchStyles();
    }
  }, [elementId]);

  const fetchStyles = async () => {
    if (!elementId) return;

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_styles')
        .select('styles')
        .eq('element_id', elementId)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      
      if (data) {
        setStyles(data.styles as ElementStyles);
      }
    } catch (error) {
      console.error('Error fetching styles:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStyle = async (property: string, value: string) => {
    if (!elementId) return;

    const newStyles = { ...styles, [property]: value };
    setStyles(newStyles);

    try {
      const { error } = await supabase
        .from('site_styles')
        .upsert({
          element_id: elementId,
          styles: newStyles,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      toast.success('Estilo atualizado');
    } catch (error) {
      console.error('Error updating styles:', error);
      toast.error('Erro ao atualizar estilo');
    }
  };

  const resetStyles = async () => {
    if (!elementId) return;

    try {
      const { error } = await supabase
        .from('site_styles')
        .delete()
        .eq('element_id', elementId);

      if (error) throw error;
      
      setStyles({});
      toast.success('Estilos resetados');
    } catch (error) {
      console.error('Error resetting styles:', error);
      toast.error('Erro ao resetar estilos');
    }
  };

  return {
    styles,
    loading,
    updateStyle,
    resetStyles,
    fetchStyles,
  };
};
