import GPTCard from '@/components/GPTCard';

import data from '@/../gpthub.json';

export default function GPTs() {
  return (
    <div className="p-10">
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
        <GPTCard {...data.chatgpt[0]} />
      </div>
      {/* <img src="https://files.oaiusercontent.com/file-SxYQO0Fq1ZkPagkFtg67DRVb?se=2123-10-12T23%3A57%3A32Z&amp;sp=r&amp;sv=2021-08-06&amp;sr=b&amp;rscc=max-age%3D31536000%2C%20immutable&amp;rscd=attachment%3B%20filename%3Dagent_3.webp&amp;sig=pLlQh8oUktqQzhM09SDDxn5aakqFuM2FAPptuA0mbqc%3D" /> */}
    </div>
  );
}