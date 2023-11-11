import { useState } from 'react';

import gptsData from '@@/gpthub.json';

export default function Search() {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const newIndex = new FlexSearch({
        // 这里添加你的FlexSearch配置
    });
    setIndex(newIndex);
    // 这里添加你的文档到索引
    // newIndex.add(...);
}, []);

  return (
    <div>
      <div className="px-4 h-16 flex justify-between items-center mb-4 border-4 rounded-2xl dark:border-slate-600">
        <b>Total: {gptsData?.gpts.length}</b>
        <input
          className="input input-bordered input-sm"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {gptsData?.gpts?.map((item) => <GPTCard key={item.id} {...item} />)}
      </div>
    </div>
  );
}