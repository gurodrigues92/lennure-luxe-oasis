import { useEffect, useRef, useState } from 'react';
import { useElementSelection } from '@/hooks/useElementSelection';

export const VisualEditorPreview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { setSelectedElement } = useElementSelection();
  const [overlayRect, setOverlayRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!iframeDoc) return;

      // Inject click handler
      iframeDoc.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        
        // Find the closest section or meaningful element
        let element = target;
        while (element && !element.hasAttribute('data-section') && element.tagName !== 'SECTION') {
          element = element.parentElement as HTMLElement;
        }

        if (element) {
          const rect = element.getBoundingClientRect();
          const iframeRect = iframe.getBoundingClientRect();
          
          // Adjust rect to be relative to the viewport
          const adjustedRect = new DOMRect(
            rect.x + iframeRect.x,
            rect.y + iframeRect.y,
            rect.width,
            rect.height
          );

          setOverlayRect(adjustedRect);
          
          setSelectedElement({
            id: element.id || `${element.tagName.toLowerCase()}-${Date.now()}`,
            tag: element.tagName.toLowerCase(),
            section: element.getAttribute('data-section') || element.id || 'unknown',
            fieldKey: element.getAttribute('data-field') || undefined,
            rect: adjustedRect,
          });
        }
      });

      // Add data attributes to sections for easier selection
      const sections = iframeDoc.querySelectorAll('section');
      sections.forEach((section, index) => {
        if (!section.hasAttribute('data-section')) {
          section.setAttribute('data-section', section.id || `section-${index}`);
        }
      });
    };

    iframe.addEventListener('load', handleLoad);

    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, [setSelectedElement]);

  return (
    <div className="relative w-full h-full">
      <iframe
        ref={iframeRef}
        src="/"
        className="w-full h-full border-0"
        title="Preview"
      />
      
      {overlayRect && (
        <div
          className="absolute border-2 border-primary pointer-events-none z-50"
          style={{
            left: overlayRect.x,
            top: overlayRect.y,
            width: overlayRect.width,
            height: overlayRect.height,
          }}
        />
      )}
    </div>
  );
};
