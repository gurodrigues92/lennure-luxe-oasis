import { useEffect, useRef } from 'react';
import { useFloating, offset, flip, shift, autoUpdate } from '@floating-ui/react';
import { useElementSelection } from '@/hooks/useElementSelection';
import { ImageEditor } from './ImageEditor';
import { InlineTextEditor } from './InlineTextEditor';
import { ButtonEditor } from './ButtonEditor';
import { SectionEditor } from './SectionEditor';

export const FloatingToolbar = () => {
  const { selectedElement } = useElementSelection();
  const referenceRef = useRef<HTMLDivElement>(null);

  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(10), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    if (selectedElement?.rect) {
      // Create a virtual reference element based on the rect
      refs.setReference({
        getBoundingClientRect: () => selectedElement.rect!,
      });
    }
  }, [selectedElement, refs]);

  if (!selectedElement) return null;

  const getEditorComponent = () => {
    switch (selectedElement.tag) {
      case 'img':
        return <ImageEditor />;
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
      case 'span':
      case 'div':
        return <InlineTextEditor />;
      case 'button':
      case 'a':
        return <ButtonEditor />;
      case 'section':
        return <SectionEditor />;
      default:
        return null;
    }
  };

  return (
    <div
      ref={refs.setFloating}
      style={floatingStyles}
      className="z-[9999] bg-background border border-border rounded-lg shadow-lg p-3 min-w-[300px] max-w-[400px]"
    >
      {getEditorComponent()}
    </div>
  );
};
