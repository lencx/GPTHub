import clsx from 'clsx';

interface GPTHubNoteProps {
  className?: string;
}

export default function GPTHubNote({ className }: GPTHubNoteProps) {
  return (
    <div className={clsx('alert alert-warning', className)}>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>Please exercise caution when using data obtained from the internet. Ensure the protection of your personal information to avoid falling prey to scams.</span>
    </div>
  )
}