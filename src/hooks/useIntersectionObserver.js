import { useEffect } from 'react';

const useIntersectionObserver = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ref.current.classList.toggle('animate');
            observer.unobserve(ref.current);
          }
        });
      },
      { rootMargin: '-25%' }
    );
    observer.observe(ref.current);
    //eslint-disable-next-line
  }, []);
};

export default useIntersectionObserver;
