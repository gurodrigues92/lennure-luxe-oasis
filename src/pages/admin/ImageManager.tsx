import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from 'lucide-react';

const ImageManager = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Gerenciador de Imagens</h2>
        <p className="text-muted-foreground">
          Upload e gerenciamento de imagens do site
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <Image className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Em Desenvolvimento</CardTitle>
          <CardDescription>
            Esta funcionalidade estará disponível em breve
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Aqui você poderá fazer upload de novas imagens, gerenciar as existentes
            e visualizar onde cada imagem está sendo utilizada no site.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageManager;
