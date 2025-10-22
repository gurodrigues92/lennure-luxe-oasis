import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History as HistoryIcon, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface HistoryEntry {
  id: string;
  section: string;
  field_key: string;
  old_value: string;
  new_value: string;
  changed_at: string;
  changed_by_admin: {
    name: string;
  };
}

const History = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('content', {
        method: 'GET',
      });

      if (error) throw error;
      setHistory(data || []);
    } catch (error: any) {
      console.error('Error fetching history:', error);
      toast.error('Erro ao carregar histórico');
    } finally {
      setLoading(false);
    }
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
        <h2 className="text-2xl font-bold">Histórico de Alterações</h2>
        <p className="text-muted-foreground">
          Todas as mudanças realizadas no conteúdo do site
        </p>
      </div>

      {history.length === 0 ? (
        <Card>
          <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <HistoryIcon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Sem Histórico</CardTitle>
            <CardDescription>
              Nenhuma alteração foi registrada ainda
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="space-y-4">
          {history.map((entry) => (
            <Card key={entry.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">
                      {entry.section} - {entry.field_key}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Clock className="h-3 w-3" />
                      {new Date(entry.changed_at).toLocaleString('pt-BR')}
                      <span className="ml-2">por {entry.changed_by_admin?.name || 'Admin'}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-muted-foreground mb-1">Valor Anterior:</p>
                    <p className="line-clamp-3">{entry.old_value || '(vazio)'}</p>
                  </div>
                  <div>
                    <p className="font-medium text-muted-foreground mb-1">Novo Valor:</p>
                    <p className="line-clamp-3">{entry.new_value || '(vazio)'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
