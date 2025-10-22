import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ContentData {
  [key: string]: string;
}

export const useContent = (section?: string) => {
  const [content, setContent] = useState<Record<string, ContentData>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchContent();
  }, [section]);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('section', { ascending: true });

      if (error) throw error;

      // Organize content by section
      const organized: Record<string, ContentData> = {};
      data?.forEach((item) => {
        if (!organized[item.section]) {
          organized[item.section] = {};
        }
        const key = item.language === 'pt' ? item.field_key : `${item.field_key}_${item.language}`;
        organized[item.section][key] = item.field_value || '';
      });

      setContent(organized);
    } catch (err) {
      console.error('Error fetching content:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const getSectionContent = (sectionName: string) => {
    return content[sectionName] || {};
  };

  const getField = (sectionName: string, fieldKey: string, defaultValue = '') => {
    return content[sectionName]?.[fieldKey] || defaultValue;
  };

  return {
    content,
    getSectionContent,
    getField,
    loading,
    error,
    refetch: fetchContent,
  };
};
