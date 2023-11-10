import {} from 'react';

export default function GPTCard(props: GPTHub.GPTInfo) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.url}</p>
    </div>
  );
}