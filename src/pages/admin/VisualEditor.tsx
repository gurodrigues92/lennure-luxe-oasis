import { VisualEditorPreview } from '@/components/visual-editor/VisualEditorPreview';
import { FloatingToolbar } from '@/components/visual-editor/FloatingToolbar';
import { StylePanel } from '@/components/visual-editor/StylePanel';
import { SectionDragDrop } from '@/components/visual-editor/SectionDragDrop';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Monitor, Tablet, Smartphone, Undo2, Redo2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUndoRedo } from '@/hooks/useUndoRedo';
import { useAutoSave } from '@/hooks/useAutoSave';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const VisualEditor = () => {
  const navigate = useNavigate();
  const { canUndo, canRedo, undo, redo } = useUndoRedo();
  const { getSaveStatus, isSaving } = useAutoSave({ delay: 3000 });
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getPreviewWidth = () => {
    switch (viewMode) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

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
          
          <Badge variant={isSaving ? "default" : "secondary"} className="ml-2">
            {getSaveStatus()}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          {/* Undo/Redo */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => undo()}
            disabled={!canUndo()}
            title="Desfazer (Ctrl+Z)"
          >
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => redo()}
            disabled={!canRedo()}
            title="Refazer (Ctrl+Shift+Z)"
          >
            <Redo2 className="h-4 w-4" />
          </Button>

          <div className="w-px h-6 bg-border mx-2" />

          {/* View Mode Toggle */}
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            <Button
              variant={viewMode === 'desktop' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('desktop')}
              title="Visualização Desktop"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'tablet' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('tablet')}
              title="Visualização Tablet"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'mobile' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('mobile')}
              title="Visualização Mobile"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <div className="w-px h-6 bg-border mx-2" />

          <Button onClick={() => window.location.reload()} variant="outline" size="sm">
            Atualizar Preview
          </Button>
        </div>
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
        <div className="flex-1 bg-muted p-4 overflow-auto">
          <div 
            className="mx-auto bg-background shadow-2xl rounded-lg overflow-hidden transition-all duration-300"
            style={{ width: getPreviewWidth(), height: '100%' }}
          >
            <VisualEditorPreview />
          </div>
        </div>

        {/* Floating Toolbar */}
        <FloatingToolbar />
      </div>
    </div>
  );
};

export default VisualEditor;
