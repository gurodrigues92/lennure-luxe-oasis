import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface TextEditorProps {
  section: string;
  fieldKey: string;
  initialValue: string;
  onSave?: () => void;
}

export const TextEditor = ({ section, fieldKey, initialValue, onSave }: TextEditorProps) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (isEditing && value !== initialValue) {
      // Debounce save
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        saveContent();
      }, 2000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, isEditing]);

  const saveContent = async () => {
    try {
      const { error } = await supabase
        .from('site_content')
        .update({ 
          field_value: value,
          updated_at: new Date().toISOString(),
        })
        .eq('section', section)
        .eq('field_key', fieldKey);

      if (error) throw error;

      toast.success('Texto salvo');
      onSave?.();
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Erro ao salvar texto');
    }
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (value !== initialValue) {
      saveContent();
    }
  };

  if (isEditing) {
    return (
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={handleBlur}
        onInput={(e) => setValue(e.currentTarget.textContent || '')}
        className="outline-2 outline-dashed outline-primary"
        style={{ minHeight: '1em' }}
      >
        {value}
      </div>
    );
  }

  return (
    <div onDoubleClick={handleDoubleClick} className="cursor-text hover:outline hover:outline-1 hover:outline-primary/50">
      {value}
    </div>
  );
};
