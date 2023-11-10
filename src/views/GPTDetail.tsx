import data from '@/../gpthub.json';

export default function GPTs() {
  const link = data.chatgpt[0].link;

  const handleGo = () => {
    window.open(link)
  };

  return (
    <div className="p-10 max-w-6xl m-auto">
      <div className="relative w-full h-[500px] border-orange-600 border-2 rounded-2xl pointer-events-none select-none">
        <iframe
          onClick={handleGo}
          className="absolute inset-0 w-full h-full"
          src={link}
        />
        <a
          href={link}
          target="_blank"
          className="pointer-events-auto absolute inset-0 w-full h-full"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}