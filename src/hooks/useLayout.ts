import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const DEFAULT_SECTIONS = [
  'hero',
  'about',
  'video',
  'services',
  'differentials',
  'space',
  'testimonials',
  'philosophy',
  'contact',
];

export const useLayout = () => {
  const [sections, setSections] = useState<string[]>(DEFAULT_SECTIONS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLayout();
  }, []);

  const fetchLayout = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_layout')
        .select('layout_data')
        .order('updated_at', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data?.layout_data) {
        const layoutData = data.layout_data as { sections: string[] };
        setSections(layoutData.sections || DEFAULT_SECTIONS);
      }
    } catch (error) {
      console.error('Error fetching layout:', error);
      setSections(DEFAULT_SECTIONS);
    } finally {
      setLoading(false);
    }
  };

  const updateLayout = async (newSections: string[]) => {
    setSections(newSections);

    try {
      // First, get the existing layout
      const { data: existing } = await supabase
        .from('site_layout')
        .select('id')
        .limit(1)
        .single();

      if (existing?.id) {
        // Update existing
        const { error } = await supabase
          .from('site_layout')
          .update({
            layout_data: { sections: newSections },
            updated_at: new Date().toISOString(),
          })
          .eq('id', existing.id);

        if (error) throw error;
      } else {
        // Insert new
        const { error } = await supabase
          .from('site_layout')
          .insert({
            layout_data: { sections: newSections },
          });

        if (error) throw error;
      }

      toast.success('Layout atualizado');
    } catch (error) {
      console.error('Error updating layout:', error);
      toast.error('Erro ao atualizar layout');
      // Revert on error
      fetchLayout();
    }
  };

  const resetLayout = async () => {
    await updateLayout(DEFAULT_SECTIONS);
  };

  return {
    sections,
    loading,
    updateLayout,
    resetLayout,
    fetchLayout,
  };
};
