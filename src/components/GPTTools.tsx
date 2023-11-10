import clsx from 'clsx';

const toolList = ['DALL•E', 'Browsing', 'Data Analysis'];

interface GPTToolsProps {
  data: GPTHub.GPTInfo;
  size?: 'sm' | 'md' | 'lg';
}

export default function GPTTools({ data, size = 'md' }: GPTToolsProps) {
  if (!data?.tools?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {data?.tools?.map((item) => {
        if (!item) return null;
        const el = toolList?.[item-1];
        return (
          <div key={item} className={clsx('badge', {
            'badge-sm': size === 'sm',
            'badge-lg': size === 'lg',
            'badge-md': size === 'md',
            'badge-primary': item === 1,
            'badge-accent': item === 2,
            'badge-secondary': item === 3,
          })}>
            {el}
          </div>
        );
      })}
    </div>
  );
}