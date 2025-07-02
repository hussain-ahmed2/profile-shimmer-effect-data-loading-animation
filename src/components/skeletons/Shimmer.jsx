export default function Shimmer({ className = "", ...props }) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        bg-neutral-300
        dark:bg-neutral-700
        before:absolute
        before:-inset-100
        before:bg-gradient-to-br
        before:from-transparent
        before:from-30%
        before:via-white/50
        before:to-transparent
        before:to-70%
        before:transform
        before:-translate-x-full
        before:animate-shimmer
        ${className}
      `}
      {...props}
    />
  );
}
