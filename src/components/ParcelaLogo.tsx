interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  light?: boolean;
}

export default function ParcelaLogo({ size = 'md', light = false }: LogoProps) {
  const iconSize = size === 'sm' ? 24 : size === 'lg' ? 36 : 28;
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-3xl' : 'text-2xl';
  const iconColor = light ? '#FAF7F2' : '#2D5016';

  return (
    <span className="flex items-center gap-2">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="M3.3 7 12 12l8.7-5" />
        <path d="M12 22V12" />
      </svg>
      <span className={`font-display font-bold leading-none ${textSize}`} aria-label="Parcela">
        <span className={light ? 'text-cream' : 'text-forest'}>P</span>
        <span className="text-red-600">a</span>
        <span className={light ? 'text-cream' : 'text-forest'}>rcela</span>
      </span>
    </span>
  );
}
