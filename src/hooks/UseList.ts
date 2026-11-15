import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export function useList<T>(path: string) {
  const { authFetch } = useAuth();

  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reloadCount, setReloadCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);
    setError("");

    authFetch(path)
      .then((data) => {
        if (!cancelled) setItems(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Onbekende fout");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [path, reloadCount]);

  const reload = () => setReloadCount((n) => n + 1);

  return { items, loading, error, reload };
}