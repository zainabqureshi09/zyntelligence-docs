import { useEffect, useCallback } from 'react';

interface ShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  callback: () => void;
}

export function useKeyboardShortcuts(shortcuts: ShortcutConfig[]) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const ctrlOrMeta = shortcut.ctrlKey || shortcut.metaKey;
        const isCtrlOrMetaPressed = event.ctrlKey || event.metaKey;

        if (
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          (ctrlOrMeta ? isCtrlOrMetaPressed : true) &&
          (shortcut.shiftKey ? event.shiftKey : true)
        ) {
          event.preventDefault();
          shortcut.callback();
          return;
        }
      }
    },
    [shortcuts]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}

export default useKeyboardShortcuts;
