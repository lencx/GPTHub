import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { gptLink } from '@/utils';
import GPTTools from '@components/GPTTools';
import data from '@@/gpthub.json';

export default function GPTs() {
  const params = useParams();

  const gptInfo = useMemo(() => {
    return data?.gpts?.find((item) => item.id === params?.id);
  }, [params?.id]);

  if (!gptInfo) return null;

  const link = gptLink(gptInfo.id);

  return (
    <div className="p-10 max-w-6xl m-auto">
      <div className="text-center text-4xl font-bold">{gptInfo.name}</div>
      <div className="text-center mt-2 mb-10">
        <div>By {gptInfo.author}</div>
        <GPTTools data={gptInfo} />
      </div>
      <p className="text-lg mb-5">{gptInfo.description}</p>
      <div className="relative w-full h-[500px] border-orange-600 border-2 rounded-2xl pointer-events-none select-none overflow-hidden">
        <iframe
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