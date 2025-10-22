import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export const AdminSetup = () => {
  const [loading, setLoading] = useState(false);
  const [setupComplete, setSetupComplete] = useState(false);

  useEffect(() => {
    checkAdminExists();
  }, []);

  const checkAdminExists = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('id')
        .eq('role', 'admin')
        .limit(1);

      if (error) throw error;
      if (data && data.length > 0) {
        setSetupComplete(true);
      }
    } catch (error) {
      console.error('Error checking admin:', error);
    }
  };

  const setupAdmin = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('setup-admin', {
        body: {
          email: 'gurodrigues92@gmail.com',
          password: 'AdminLennure123!',
          name: 'Administrador Lennure',
        },
      });

      if (error) throw error;

      if (data.success) {
        toast.success('Admin criado com sucesso!');
        setSetupComplete(true);
      } else {
        throw new Error(data.error || 'Erro ao criar admin');
      }
    } catch (error: any) {
      console.error('Error setting up admin:', error);
      
      if (error.message?.includes('already exists')) {
        toast.info('Admin já existe');
        setSetupComplete(true);
      } else {
        toast.error('Erro ao criar admin: ' + (error.message || 'Erro desconhecido'));
      }
    } finally {
      setLoading(false);
    }
  };

  if (setupComplete) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="w-80 border-primary/20 shadow-xl">
        <CardHeader>
          <CardTitle className="text-sm">Configuração Inicial</CardTitle>
          <CardDescription className="text-xs">
            Criar usuário administrador
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={setupAdmin}
            disabled={loading}
            className="w-full"
            size="sm"
          >
            {loading ? 'Criando...' : 'Criar Admin'}
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Email: gurodrigues92@gmail.com<br />
            Senha: AdminLennure123!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
