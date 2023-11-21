import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const usePokemonList = () => {
    const { data, error, isLoading } = useSWR('/api/pokemons', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });

    return {
        data,
        error,
        isLoading
    }
};

export default usePokemonList;