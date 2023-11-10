import { useEffect, useState } from 'react';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getScrollPosition = (el: any = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
});

export default function BackTop() {
  const [visible, setVisible] = useState(false);

  const handleBackToTop = () => {
    const s = document.documentElement.scrollTop || document.body.scrollTop;
    if (s > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      if (!visible) {
        setVisible(false);
      }
    }
  };

  const visibleBtn = () => {
    if (getScrollPosition().y > 300) {
      if (!visible) {
        setVisible(true);
      }
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', visibleBtn);
    return () => {
      window.removeEventListener('scroll', visibleBtn);
    };
  });

  return (
    <div
      className={clsx('transform fixed right-4 bottom-4 z-50 w-12 h-12 rounded-full flex items-center justify-center bg-base-100 text-slate-500 bg-slate-400/30 dark:bg-slate-600/30 dark:text-slate-400 transition-all duration-300', {
        'opacity-0 scale-0': !visible,
        'opacity-100 scale-100': visible,
      })}
      onClick={handleBackToTop}
    >
      <svg className="w-5" viewBox="0 0 98 125" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m.41627505 120.505813c.36557376-2.799314 38.38567845-112.09375627 40.40633855-116.52273479 2.0206601-4.42897853 7.0443939-6.06190829 10.0049342.20172081 1.9736935 4.17575274 17.3630227 42.22464148 46.1679874 114.14666598.3068629 1.030234.4237748 1.755017.3507358 2.174348-.4483666 2.574161-2.3292736 3.429521-4.6125739 2.516093-15.0683018-6.028033-36.2681037-23.1692513-43.8663627-23.1692513-7.5982589 0-27.0568176 12.9171643-43.18383202 23.1692513-.96511235.613531-1.91473089 1.069619-2.88840599 1.149501s-2.74439509-.86628-2.37882134-3.665594z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}