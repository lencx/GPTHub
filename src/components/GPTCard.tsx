import {} from 'react';
import { useNavigate } from 'react-router-dom';

const getId = (url: string) => {
  if (!url) return '';
  const id = url.split('https://chat.openai.com/g/')?.[1];
  return id;
}

export default function GPTCard({
  link,
  name,
  description,
  icon,
}: GPTHub.GPTInfo) {
  const navigate = useNavigate();

  const handleDetail = () => {
    const id = getId(link);
    navigate(`/gpts/${id}`);
  }

  return (
    <div className="card card-side shadow-lg hover:shadow-2xl transition duration-500 ease-in-out">
      <figure className="p-[10px] min-w-[80px] max-w-[120px]"><img className="rounded-full" src={icon} alt={name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleDetail}>Detail</button>
        </div>
      </div>
    </div>
  );
}