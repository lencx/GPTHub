import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

import GPTCard from '@components/GPTCard';
import GPTHubNote from '@components/GPTHubNote';
import gptsData from '@@/gpthub.json';

function createSearchRegex(searchTerm: string) {
  return new RegExp(searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
}

function fuzzySearchWithPerformance(list: GPTHub.GPTInfo[], regex: RegExp) {
  const ids = [];
  for (const item of list) {
    if (regex.test(item?.description || '') || regex.test(item.name)) {
      ids.push(item.id);
    }
  }
  return ids;
}

export default function GPTs() {
  const [list, setList] = useState(gptsData.gpts || []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce((searchTerm: string) => {
    const searchRegex = createSearchRegex(searchTerm);
    const ids = fuzzySearchWithPerformance((gptsData.gpts as GPTHub.GPTInfo[]), searchRegex);
    setList(gptsData.gpts.filter((item) => ids.includes(item?.id || '')));
  }, 500), []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    debouncedSearch(searchTerm);
  };

  return (
    <div>
      <GPTHubNote />
      <div className="mt-4 px-4 h-16 flex justify-between items-center mb-4 border-4 rounded-2xl dark:border-slate-600">
        <b>Total: {list.length}</b>
        <input
          className="input input-bordered input-sm"
          type="search"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
      {list.length === 0 ? (
        <div className="flex h-80 justify-center items-center text-4xl font-bold text-slate-500">No Data</div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {list?.map((item) => {
            if (!item.id) return null;
            return <GPTCard key={item.id} {...item} />
          })}
        </div>
      )}
    </div>
  );
}