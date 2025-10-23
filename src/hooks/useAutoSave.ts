import { useState, useEffect, useCallback } from 'react';

interface AutoSaveOptions {
  delay?: number;
  onSave?: () => Promise<void>;
}

export const useAutoSave = ({ delay = 3000, onSave }: AutoSaveOptions) => {
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const save = useCallback(async () => {
    if (!onSave || !hasUnsavedChanges) return;

    try {
      setIsSaving(true);
      await onSave();
      setLastSaved(new Date());
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Auto-save error:', error);
    } finally {
      setIsSaving(false);
    }
  }, [onSave, hasUnsavedChanges]);

  const markChanged = useCallback(() => {
    setHasUnsavedChanges(true);
  }, []);

  useEffect(() => {
    if (!hasUnsavedChanges) return;

    const timeoutId = setTimeout(() => {
      save();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [hasUnsavedChanges, delay, save]);

  const getSaveStatus = useCallback(() => {
    if (isSaving) return 'Salvando...';
    if (hasUnsavedChanges) return 'Alterações não salvas';
    if (lastSaved) return `Salvo às ${lastSaved.toLocaleTimeString()}`;
    return 'Tudo salvo';
  }, [isSaving, hasUnsavedChanges, lastSaved]);

  return {
    isSaving,
    lastSaved,
    hasUnsavedChanges,
    markChanged,
    save,
    getSaveStatus
  };
};
