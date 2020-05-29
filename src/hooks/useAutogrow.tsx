import React from 'react';

const useAutogrow = () => {
  const [dummy] = React.useState(() => {
    const dummy = document.createElement('div');
    dummy.style.position = 'absolute';
    dummy.style.right = '1000%';
    dummy.style.bottom = '1000%';
    return dummy;
  });
  const [textarea, setTextarea] = React.useState<HTMLTextAreaElement>();
  const textareaRef = React.useCallback((node: HTMLTextAreaElement | null) => {
    if (node != null) setTextarea(node);
  }, []);

  const inputHandler = React.useCallback(() => {
    if (textarea == null) return;

    dummy.innerHTML = textarea.value.replace(/\n/g, '<br />') + '<br />';
    textarea.style.height = `${dummy.getBoundingClientRect().height}px`;
  }, [dummy, textarea]);

  // Since we use a ref to set textarea, we don't need useLayoutEffect
  React.useEffect(() => {
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
