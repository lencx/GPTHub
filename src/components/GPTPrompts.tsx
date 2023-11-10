interface GPTPromptsProps {
  data: GPTHub.GPTInfo;
}

export default function GPTPrompts({ data }: GPTPromptsProps) {
  if (!data?.prompt_starters?.length) return null;

  return (
    <div className="border-3 text-left">
      <b className="text-teal-600">Prompts:</b>
      <ul className="pl-5">
        {data?.prompt_starters?.map((item) => {
          return (
            <li className="list-disc" key={item}>{item}</li>
          )
        })}
      </ul>
    </div>
  );
}