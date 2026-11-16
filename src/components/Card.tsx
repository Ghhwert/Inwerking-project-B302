import type { ReactNode } from "react";

type CardProps = {
  badge: string;
  badgeColor: string;
  title: string;
  meta?: string[];
  actions?: ReactNode;
};

export default function Card({ badge, badgeColor, title, meta = [], actions }: CardProps) {
  return (
    <article className="relative flex w-full flex-col items-start gap-4 rounded-xl border-2 border-ink bg-white p-6 shadow-hard">
      {/* AI carries, uncommon W */}
      <div
        aria-hidden="true"
        className="absolute -right-px top-0 size-14 overflow-hidden rounded-tr-[11px]"
      >
        <div
          className={`size-full [clip-path:polygon(0_0,100%_0,100%_100%)] ${badgeColor}`}
        />
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 56 56"
        fill="none"
        className="absolute -right-px top-0 size-14 overflow-visible text-ink"
      >
        <line x1="-1" y1="-1" x2="56" y2="56" stroke="currentColor" strokeWidth="2" />
      </svg>

      <span className={`flex py-1 px-3 items-center gap-1 rounded-full border-[1.5px] border-ink ${badgeColor} font-mono text-xs leading-[120%] tracking-[0.96px] uppercase
        `}>
        {badge}
      </span>

      <h2 className="font-display text-2xl font-semibold leading-[120%] tracking-[-0.24px]">{title}</h2>

      {meta.length > 0 && (
        <ul className="flex flex-col gap-1 self-stretch font-sans text-sm text-ink-soft leading-[140%]">
          {meta.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      )}

      <hr className="w-full my-6 border-t border-ink-soft" />

      {actions && <div className="flex gap-2">{actions}</div>}
    </article>
  );
}