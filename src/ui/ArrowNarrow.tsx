type Props = {
  className?: string;
};

export default function ArrowNarrow({ className }: Props) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 16 16">
      <path
        d="M4 12L12 4M12 4H6M12 4v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
