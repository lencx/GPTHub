import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Routes from '@/routes';

import GitHubIcon from '@icons/GitHub';
import MoonIcon from '@icons/Moon';
import SunIcon from '@icons/Sun';
import BackTop from '@components/BackTop';

export default function BaseLayout() {
  const [isDark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDark2 = theme === 'dracula';
    setDark(isDark2);
    handleClass(isDark2);
  }, [])

  const handleClass = (dark: boolean) => {
    const html = document.documentElement;
    html.setAttribute('data-theme', dark ? 'dracula' : 'cupcake');
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  const handleTheme = () => {
    const newTheme = isDark ? 'cupcake' : 'dracula';
    localStorage.setItem('theme', newTheme);
    setDark(!isDark);
    handleClass(!isDark);
  }

  return (
    <div className="bg-base-100 text-slate-600 dark:text-slate-400">
      <header className="fixed bg-base-100 px-8 top-0 z-30 flex h-16 w-full justify-between items-center bg-opacity-90 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)] shadow-sm dark:shadow-slate-500/20">
        <img
          alt="GPTHub"
          className="w-12 h-12 select-none" src="/gpthub.png"
          onClick={() => navigate('/')}
        />
        <div className="flex items-center gap-3">
          <label className="swap swap-rotate w-[30px] h-[30px] cursor-default rounded">
            <input type="checkbox" checked={isDark} onChange={handleTheme} />
            <SunIcon className="swap-off" size={30} />
            <MoonIcon className="swap-on" size={30} />
          </label>
          <a
            href="https://github.com/lencx/gpthub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon size={40} />
          </a>
          <a href="https://www.producthunt.com/posts/gpthub?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gpthub" target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=424710&theme=light" alt="GPTHub | Product Hunt"
              className="w-[180px]"
            />
          </a>
        </div>
      </header>
      <main className="pt-[80px]">
        <Routes />
      </main>
      <BackTop />
      <footer></footer>
    </div>
  )
}