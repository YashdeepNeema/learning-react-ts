import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}
interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((er) => {
        if (er instanceof CanceledError) return;
        setError(er.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;