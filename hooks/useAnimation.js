import { useEffect } from 'react';

const useIntersectionObserver = (ref, style) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.current.classList.toggle(style);
            observer.unobserve(ref.current);
          }
        });
      },
      { rootMargin: '0% 0% -10% 0%' }
    );
    observer.observe(ref.current);
    //eslint-disable-next-line
  }, []);
};

export default useIntersectionObserver;
