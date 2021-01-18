/* eslint-disable consistent-return */
import { useEffect } from 'react';

export default ({ root, target, onIntersect, threshold, rootMargin }) => {
  useEffect(() => {
    console.log('1');
    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    if (!target) {
      return;
    }

    observer.observe(target);

    return () => {
      console.log('2');
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};
