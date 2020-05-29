import * as React from 'react';

const { useCallback, useEffect, useState } = React;

const useAutogrow = () => {
  const [dummy] = useState(() => {
    const dummy = document.createElement('div');
    dummy.style.position = 'absolute';
    dummy.style.right = '1000%';
    dummy.style.bottom = '1000%';
    return dummy;
  });
  const [textarea, setTextarea] = useState<HTMLTextAreaElement>();
  const textareaRef = useCallback((node: HTMLTextAreaElement | null) => {
    if (node != null) setTextarea(node);
  }, []);

  const inputHandler = useCallback(() => {
    if (textarea == null) return;

    dummy.innerHTML = textarea.value.replace(/\n/g, '<br />') + '<br />';
    textarea.style.height = `${dummy.getBoundingClientRect().height}px`;
  }, [dummy, textarea]);

  // Since we use a ref to set textarea, we don't need useLayoutEffect
  useEffect(() => {
    if (textarea == null) return;

    // Copy over styles that we care about
    const styles = getComputedStyle(textarea);
    dummy.style.font = styles.font;
    dummy.style.padding = styles.padding;
    dummy.style.boxSizing = styles.boxSizing;
    dummy.style.border = styles.border;
    if (document.body != null) document.body.appendChild(dummy);

    textarea.addEventListener('input', inputHandler);
    inputHandler();

    return () => {
      textarea.removeEventListener('change', inputHandler);
      if (document.body != null) document.body.removeChild(dummy);
    };
  }, [textarea, inputHandler, dummy]);

  return textareaRef;
};

export default useAutogrow;
