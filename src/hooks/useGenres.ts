import { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    //initialData: { count: genres.length, results: genres },  need to make genres.ts file which contain all static data
  });

export default useGenres;
