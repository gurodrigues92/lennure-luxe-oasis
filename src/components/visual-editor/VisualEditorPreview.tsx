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

      // Inject editable styles
      const style = iframeDoc.createElement('style');
      style.textContent = `
        [data-editable] {
          transition: outline 0.2s ease, outline-offset 0.2s ease;
          cursor: pointer !important;
        }
        
        [data-editable]:hover {
          outline: 2px dashed hsl(var(--primary)) !important;
          outline-offset: 4px;
          position: relative;
        }
        
        [data-editable]:hover::after {
          content: attr(data-editable-type);
          position: absolute;
          top: -24px;
          left: 0;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 500;
          border-radius: 4px;
          z-index: 9999;
          pointer-events: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        [data-editable].selected {
          outline: 2px solid hsl(var(--primary)) !important;
          outline-offset: 4px;
        }
      `;
      iframeDoc.head.appendChild(style);

      // Function to get section name from element
      const getSectionName = (element: Element): string => {
        const section = element.closest('section');
        return section?.id || 'unknown';
      };

      // Function to get field key from element
      const getFieldKey = (element: Element): string => {
        // Try to find a data-field attribute or generate from context
        const dataField = element.getAttribute('data-field');
        if (dataField) return dataField;

        // Generate field key based on tag and position
        const tag = element.tagName.toLowerCase();
        const section = element.closest('section');
        const siblings = section?.querySelectorAll(tag) || [];
        const index = Array.from(siblings).indexOf(element);
        
        return `${tag}_${index}`;
      };

      // Add data attributes to all editable elements
      const addEditableAttributes = () => {
        // Text elements
        const textSelectors = 'h1, h2, h3, h4, h5, h6, p, span:not(.lucide):not([class*="icon"])';
        iframeDoc.querySelectorAll(textSelectors).forEach((el) => {
          if (el.textContent?.trim() && !el.querySelector('img, button, a')) {
            el.setAttribute('data-editable', 'true');
            el.setAttribute('data-editable-type', 'texto');
            el.setAttribute('data-section', getSectionName(el));
            el.setAttribute('data-field', getFieldKey(el));
          }
        });

        // Images
        iframeDoc.querySelectorAll('img').forEach((el) => {
          el.setAttribute('data-editable', 'true');
          el.setAttribute('data-editable-type', 'imagem');
          el.setAttribute('data-section', getSectionName(el));
          el.setAttribute('data-field', getFieldKey(el));
        });

        // Buttons and links
        iframeDoc.querySelectorAll('button, a.btn, a[class*="button"]').forEach((el) => {
          el.setAttribute('data-editable', 'true');
          el.setAttribute('data-editable-type', 'botão');
          el.setAttribute('data-section', getSectionName(el));
        });

        // Sections
        iframeDoc.querySelectorAll('section').forEach((el, index) => {
          el.setAttribute('data-editable', 'true');
          el.setAttribute('data-editable-type', 'seção');
          if (!el.hasAttribute('data-section')) {
            el.setAttribute('data-section', el.id || `section-${index}`);
          }
        });
      };

      addEditableAttributes();

      // Click handler for element selection
      iframeDoc.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const target = e.target as HTMLElement;
        
        // Find the closest editable element
        let element = target;
        while (element && !element.hasAttribute('data-editable')) {
          element = element.parentElement as HTMLElement;
          if (!element || element === iframeDoc.body) break;
        }

        if (element && element.hasAttribute('data-editable')) {
          // Remove previous selection
          iframeDoc.querySelectorAll('.selected').forEach(el => {
            el.classList.remove('selected');
          });
          
          // Add selection to current element
          element.classList.add('selected');

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
            section: element.getAttribute('data-section') || 'unknown',
            fieldKey: element.getAttribute('data-field') || undefined,
            rect: adjustedRect,
          });
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
