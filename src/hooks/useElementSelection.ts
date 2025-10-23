import { create } from 'zustand';

interface SelectedElement {
  id: string;
  tag: string;
  section: string;
  fieldKey?: string;
  rect?: DOMRect;
}

interface ElementSelectionState {
  selectedElement: SelectedElement | null;
  setSelectedElement: (element: SelectedElement | null) => void;
  clearSelection: () => void;
}

export const useElementSelection = create<ElementSelectionState>((set) => ({
  selectedElement: null,
  setSelectedElement: (element) => set({ selectedElement: element }),
  clearSelection: () => set({ selectedElement: null }),
}));
