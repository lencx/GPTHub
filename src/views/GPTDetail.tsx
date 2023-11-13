import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { Helmet } from 'react-helmet';

import { gptLink } from '@/utils';
import GPTTools from '@components/GPTTools';
import GPTPrompts from '@components/GPTPrompts';
import GPTHubNote from '@components/GPTHubNote';
import Comments from '@components/Comments'
import data from '@@/gpthub.json';

export default function GPTs() {
  const params = useParams();

  const gptInfo = useMemo(() => {
    return data?.gpts?.find((item) => item.id === params?.id);
  }, [params?.id]);

  if (!gptInfo?.id) return null;

  const link = gptLink(gptInfo.id);

  return (
    <div className="max-w-6xl m-auto">
      <Helmet>
        <meta content={link} property="og:title" />
      </Helmet>
      <div className="text-center text-4xl font-bold">{gptInfo.name}</div>
      <div className="flex justify-center items-end text-center mt-2 mb-10 gap-4">
        <span>By {gptInfo?.author || 'community builder'}</span>
        <span className="text-sm text-slate-500/80 dark:text-slate-400/50">{dayjs(gptInfo.updated_at).format('YYYY/MM/DD')}</span>
      </div>
      <GPTHubNote className="mb-5" />
      <GPTTools data={gptInfo} />
      <div className="my-3">
        <b className="text-teal-600 mr-3">Description:</b>
        {gptInfo.description}
      </div>
      <div className="my-3">
        <b className="text-teal-600 mr-3">Welcome Message:</b>
        {gptInfo?.welcome_message}
      </div>
      <GPTPrompts data={gptInfo} />
      <div className="relative w-full min-h-[600px] border-sky-600/50 border-2 rounded-2xl pointer-events-none select-none overflow-hidden mt-3">
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
      <div className="mt-10">
        <Comments />
      </div>
    </div>
  );
}
