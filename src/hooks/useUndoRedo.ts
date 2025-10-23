import { create } from 'zustand';

interface HistoryAction {
  type: 'content' | 'style' | 'layout';
  target: string;
  oldValue: any;
  newValue: any;
  timestamp: number;
}

interface UndoRedoState {
  history: HistoryAction[];
  currentIndex: number;
  addAction: (action: Omit<HistoryAction, 'timestamp'>) => void;
  undo: () => HistoryAction | null;
  redo: () => HistoryAction | null;
  canUndo: () => boolean;
  canRedo: () => boolean;
  clear: () => void;
}

export const useUndoRedo = create<UndoRedoState>((set, get) => ({
  history: [],
  currentIndex: -1,

  addAction: (action) => {
    const { history, currentIndex } = get();
    
    // Remove any actions after current index (if we're in the middle of history)
    const newHistory = history.slice(0, currentIndex + 1);
    
    // Add new action
    newHistory.push({
      ...action,
      timestamp: Date.now()
    });

    // Limit history to last 50 actions
    if (newHistory.length > 50) {
      newHistory.shift();
      set({ history: newHistory, currentIndex: newHistory.length - 1 });
    } else {
      set({ history: newHistory, currentIndex: newHistory.length - 1 });
    }
  },

  undo: () => {
    const { history, currentIndex } = get();
    
    if (currentIndex < 0) return null;
    
    const action = history[currentIndex];
    set({ currentIndex: currentIndex - 1 });
    
    return action;
  },

  redo: () => {
    const { history, currentIndex } = get();
    
    if (currentIndex >= history.length - 1) return null;
    
    const action = history[currentIndex + 1];
    set({ currentIndex: currentIndex + 1 });
    
    return action;
  },

  canUndo: () => {
    const { currentIndex } = get();
    return currentIndex >= 0;
  },

  canRedo: () => {
    const { history, currentIndex } = get();
    return currentIndex < history.length - 1;
  },

  clear: () => set({ history: [], currentIndex: -1 })
}));
