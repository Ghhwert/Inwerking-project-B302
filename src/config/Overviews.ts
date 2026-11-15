export type OverviewConfig<T> = {
  title: string;
  path: string;
  icon: string;
  badge: string;
  badgeColor: string;
  getKey: (item: T) => number;
  toCard: (item: T) => { title: string; meta?: string[] };
};