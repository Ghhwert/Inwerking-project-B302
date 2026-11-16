// Een tijdelijk icoon
import bookIcon from "../assets/favicon.svg";

export type CardData = {
  title: string;
  meta?: string[];
};

export type OverviewConfig<T> = {
  title: string;
  path: string;
  icon: string;
  badge: string;
  color: string;
  getKey: (item: T) => number;
  toCard: (item: T) => CardData;
};

type Genre = { 
  id: number;
  name: string;
  books_count: number;
  description: string;
};

type Book = {
  id: number;
  name: string;
  year: number;
  author: { id: number; name: string };
  genres: Genre[];
};

type Author = {
  id: number;
  name: string;
  birth_year: number;
  books_count: number;
};

export const booksConfig: OverviewConfig<Book> = {
  title: "Boeken",
  path: "/books",
  icon: bookIcon,
  badge: "BOEK",
  color: "bg-book",
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

export const authorsConfig: OverviewConfig<Author> = {
  title: "Auteurs",
  path: "/authors",
  icon: bookIcon,
  badge: "AUTEUR",
  color: "bg-author",
  getKey: (b) => b.id,
  toCard: (b) => ({
    title: b.name,
    meta: [
      `Geboren ${String(b.birth_year)}`,
      `${b.books_count?b.books_count:""} ${b.books_count==0?"Geen Boeken":b.books_count==1?"boek":"boeken"}`,
    ],
  }),
};

export const genreConfig: OverviewConfig<Genre> = {
  title: "genres",
  path: "/genres",
  icon: bookIcon,
  badge: "GENRE",
  color: "bg-genre",
  getKey: (b) => b.id,
  toCard: (b) => ({
    title: b.name,
    meta: [
      `${b.books_count?b.books_count:""} ${b.books_count==0?"Geen Boeken":b.books_count==1?"boek":"boeken"}`,
      `${b.description ? b.description : "Geen beshrijving."}`
    ],
  }),
};