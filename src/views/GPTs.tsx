import GPTCard from '@/components/GPTCard';

import gptsData from '@@/gpthub.json';

export default function GPTs() {
  return (
    <div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {gptsData?.gpts?.map((item) => <GPTCard key={item.id} {...item} />)}
      </div>
    </div>
  );
}