import { useQuery } from "@tanstack/react-query";
import type { Film } from "../types/types";

const fetchFilms = async (limit: number | 10): Promise<Film[]> => {
    const response = await fetch(`https://ghibliapi.vercel.app/films?limit=${limit}`);

    if (!response.ok) throw new Error("Erro ao buscar os filmes"
    );

    return response.json();
}

export function useFilms(limit: number) {
    return useQuery<Film[]>({
        queryKey: ["films", limit],
        queryFn: () => fetchFilms(limit),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        staleTime: 1000 * 60 * 10,
    });
}