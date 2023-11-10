import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import DetailIcon from '@icons/Detail';
import OpenAIIcon from '@icons/OpenAI';
import GPTTools from '@components/GPTTools';
import { gptLink, gptLogo } from '@/utils';

export default function GPTCard(gptInfo: GPTHub.GPTInfo) {
  const { id, name, description, logo, author } = gptInfo;
  const navigate = useNavigate();

  return (
    <div className="card card-side shadow-md transition duration-500 ease-in-out shadow-slate-500/30">
      <figure className="pl-6 w-[100px] min-w-[100px] max-w-[100px]">
        <LazyLoadImage className="rounded-full" src={gptLogo(logo)} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between">{name}</h2>
        <GPTTools data={gptInfo} size="sm" />
        <p className="my-2 line-clamp-3" title={description || ''}>{description}</p>
        <div className="card-actions justify-between">
          <span className="text-sm text-slate-400 dark:text-slate-500">By {author || 'community builder'}</span>
          <div className="flex gap-3">
            <DetailIcon
              className="action"
              size={24}
              onClick={() => navigate(`/gpts/${id}`)}
            />
            <a href={gptLink(id)}>
              <OpenAIIcon
                className="action"
                size={24}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}