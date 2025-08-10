import { useEffect, useState } from 'react';

export default function useParallax(amount = 0.3) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      setOffset(window.scrollY * amount);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [amount]);

  return offset;
}
