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
      {/* Folded corner: tba */}

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

      <hr className="border-t-2 border-ink-soft" />

      {actions && <div className="flex gap-2">{actions}</div>}
    </article>
  );
}