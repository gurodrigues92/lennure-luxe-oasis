import { VisualEditorPreview } from '@/components/visual-editor/VisualEditorPreview';
import { StylePanel } from '@/components/visual-editor/StylePanel';
import { SectionDragDrop } from '@/components/visual-editor/SectionDragDrop';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VisualEditor = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="bg-background border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/admin/dashboard')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-xl font-semibold">Editor Visual</h1>
        </div>
        <Button onClick={() => window.location.reload()}>
          Atualizar Preview
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 border-r bg-background overflow-y-auto p-4">
          <Tabs defaultValue="styles">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="styles">Estilos</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
            </TabsList>
            
            <TabsContent value="styles" className="mt-4">
              <StylePanel />
            </TabsContent>
            
            <TabsContent value="layout" className="mt-4">
              <SectionDragDrop />
            </TabsContent>
          </Tabs>
        </div>

        {/* Preview Area */}
        <div className="flex-1 bg-muted">
          <VisualEditorPreview />
        </div>
      </div>
    </div>
  );
};

export default VisualEditor;
