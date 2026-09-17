import { layout, prepare } from '@chenglou/pretext';
import { RefObject, useEffect } from 'react';

export function usePretextHeight<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let preparedText: ReturnType<typeof prepare> | undefined;

    const measure = async () => {
      await document.fonts.ready;
      const styles = window.getComputedStyle(element);
      preparedText = prepare(element.textContent ?? '', styles.font);
      const result = layout(preparedText, element.clientWidth, Number.parseFloat(styles.lineHeight));
      element.style.minHeight = `${Math.ceil(result.height)}px`;
    };

    const resizeObserver = new ResizeObserver(() => {
      if (!preparedText) return;
      const styles = window.getComputedStyle(element);
      const result = layout(preparedText, element.clientWidth, Number.parseFloat(styles.lineHeight));
      element.style.minHeight = `${Math.ceil(result.height)}px`;
    });

    void measure().then(() => resizeObserver.observe(element));
    return () => resizeObserver.disconnect();
  }, [ref]);
}
