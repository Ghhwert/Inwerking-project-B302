// Een tijdelijk icoon, tot de designers het echte aanleveren
import bookIcon from "../assets/favicon.svg";

// Wat de kaart nodig heeft
export type CardData = {
  title: string;
  meta?: string[];
};

// De vorm van een config
export type OverviewConfig<T> = {
  title: string;
  path: string;
  icon: string;
  badge: string;
  badgeColor: string;
  getKey: (item: T) => number;
  toCard: (item: T) => CardData;
};

type Genre = { id: number; name: string };

type Book = {
  id: number;
  name: string;
  year: number;
  author: { id: number; name: string };
  genres: Genre[];
};

export const booksConfig: OverviewConfig<Book> = {
  title: "Boeken",
  path: "/books",
  icon: bookIcon,
  badge: "BOEK",
  badgeColor: "bg-book",
  getKey: (b) => b.id,
  toCard: (b) => ({
    title: b.name,
    meta: [
      b.author?.name ?? "Onbekende auteur",
      String(b.year),
      b.genres?.map((g) => g.name).join(", ") ?? "",
    ],
  }),
};