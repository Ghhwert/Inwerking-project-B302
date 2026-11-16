import { useState } from "react";
import type { ReactNode } from "react";
import Card from "./Card";
import Field from "./Field";
import { useList } from "../hooks/UseList";
import type { OverviewConfig } from "../config/Overviews";

type OverviewPageProps<T> = {
  config: OverviewConfig<T>;
  renderActions?: (item: T) => ReactNode;
};

export default function OverviewPage<T>({ config, renderActions }: OverviewPageProps<T>) {
  const { items, loading, error } = useList<T>(config.path);

  console.log(items);

  const [query, setQuery] = useState("");

  const visible = items.filter((item) =>
    config.toCard(item).title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="flex flex-col gap-12 px-4 pb-24 pt-14 md:px-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col items-start gap-3">
          <p className="font-mono text-xs font-medium uppercase leading-[120%] tracking-[0.96px] text-ink-soft">
            Collectie · {items.length} {config.title.toLowerCase()}
          </p>
          <div className="flex items-center gap-4">
            <h1 className="font-display text-5xl">Alle {config.title.toLowerCase()}</h1>
            <img src={config.icon} alt="" />
          </div>
        </div>

        <div className="w-full md:w-[280px]">
          <Field
            id="search"
            label="ZOEKEN"
            placeholder="Zoek op titel"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-ink-soft">Laden...</p>}
      {error && <p role="alert" className="text-error">{error}</p>}
      {!loading && !error && visible.length === 0 && (
        <p className="text-ink-soft">Niets gevonden.</p>
      )}

      <div className="grid grid-cols-[repeat(auto-fill,minmax(296px,1fr))] gap-x-10 gap-y-8">
        {visible.map((item) => {
          const card = config.toCard(item);
          return (
            <Card
              key={config.getKey(item)}
              badge={config.badge}
              badgeColor={config.color}
              title={card.title}
              meta={card.meta}
              actions={renderActions?.(item)}
            />
          );
        })}
      </div>
    </section>
  );
}

// Zoekbutton en svg's 