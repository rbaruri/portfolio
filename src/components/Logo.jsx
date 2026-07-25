export default function Logo({ size = 'md', wordmark = true }) {
  const markSize = size === 'lg' ? 56 : size === 'sm' ? 26 : 32

  return (
    <span className={`logo logo-${size}`}>
      <svg
        className="logo-mark"
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="48" height="48" rx="12" fill="currentColor" />
        <path
          className="logo-mark-letter"
          d="M15 11h13.2c5.1 0 8.8 3.2 8.8 7.9 0 3.5-2 6.2-5.2 7.3L38 37h-5.8l-6.1-9.8H19.8V37H15V11Zm4.8 4.2v8.6h8c2.7 0 4.4-1.5 4.4-4.3s-1.7-4.3-4.4-4.3h-8Z"
          fill="var(--logo-fg)"
        />
        <circle className="logo-mark-dot" cx="38.5" cy="11.5" r="3" fill="var(--logo-accent)" />
      </svg>
      {wordmark ? (
        <span className="logo-word">
          <span className="logo-name">rajasree</span>
          <span className="logo-tag">rb</span>
        </span>
      ) : null}
    </span>
  )
}
